// Supabase Edge Function: notify-lead
// -----------------------------------------------------------------------------
// Emails a notification to the business whenever a new row is inserted into
// public.leads. Wired via a Supabase Database Webhook (INSERT on public.leads →
// POST to this function). Sends mail through Resend (https://resend.com).
//
// SCAFFOLD: it no-ops gracefully until the two secrets below are set, so it can
// be deployed now and "switched on" later without ever affecting the website
// form (the form writes to `leads` directly; this runs afterwards, out of band).
//
// Required secrets (set with `supabase secrets set` or in the dashboard):
//   RESEND_API_KEY   – your Resend API key (re_...)
//   LEAD_NOTIFY_TO   – recipient inbox, e.g. info@goldenstatewindows.com
// Optional:
//   LEAD_NOTIFY_FROM – verified sender; defaults to Resend's test sender.
//                      Use a sender on your verified domain in production,
//                      e.g. "Golden State Windows <leads@goldenstatewindows.com>".
//
// See ./README.md for the full deploy + webhook setup steps.

interface LeadRecord {
  id?: string;
  name?: string;
  email?: string;
  phone?: string;
  city?: string | null;
  project_type?: string | null;
  message?: string | null;
  source?: string | null;
  created_at?: string;
}

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const NOTIFY_TO = Deno.env.get("LEAD_NOTIFY_TO");
const NOTIFY_FROM =
  Deno.env.get("LEAD_NOTIFY_FROM") ?? "Golden State Windows <onboarding@resend.dev>";

const esc = (v: unknown) =>
  String(v ?? "—").replace(/[<>&"]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" })[c] as string,
  );

const PROJECT_LABELS: Record<string, string> = {
  windows: "Window Replacement",
  siding: "Siding",
  energy: "Energy-Efficient Windows",
  doors: "Door Installation",
  multiple: "Multiple Services",
};

Deno.serve(async (req) => {
  try {
    const payload = await req.json().catch(() => ({}));
    // A Supabase webhook posts { type, table, schema, record, old_record }.
    // Fall back to treating the whole body as the record for manual testing.
    const lead: LeadRecord = payload?.record ?? payload ?? {};

    // Not configured yet → succeed without sending (keeps the webhook quiet).
    if (!RESEND_API_KEY || !NOTIFY_TO) {
      console.warn("notify-lead: RESEND_API_KEY or LEAD_NOTIFY_TO not set — skipping email.");
      return Response.json({ ok: true, skipped: "not_configured" });
    }

    const projectType = lead.project_type
      ? PROJECT_LABELS[lead.project_type] ?? lead.project_type
      : "—";
    const subject = `New quote request — ${lead.name ?? "Website lead"}${
      lead.city ? ` (${lead.city})` : ""
    }`;

    const row = (label: string, value: string) =>
      `<tr><td style="padding:6px 16px 6px 0;color:#6b7280;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0;color:#111827">${value}</td></tr>`;

    const html = `<div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;max-width:560px">
  <h2 style="margin:0 0 4px">New quote request</h2>
  <p style="margin:0 0 16px;color:#6b7280">Submitted via goldenstatewindows.com</p>
  <table style="border-collapse:collapse;font-size:14px;width:100%">
    ${row("Name", esc(lead.name))}
    ${row("Phone", `<a href="tel:${esc(lead.phone)}">${esc(lead.phone)}</a>`)}
    ${row("Email", `<a href="mailto:${esc(lead.email)}">${esc(lead.email)}</a>`)}
    ${row("City", esc(lead.city))}
    ${row("Project", esc(projectType))}
    ${row("Message", esc(lead.message))}
    ${row("Source", esc(lead.source))}
    ${row("Received", esc(lead.created_at))}
  </table>
</div>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        from: NOTIFY_FROM,
        to: [NOTIFY_TO],
        reply_to: lead.email || undefined,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("notify-lead: Resend error", res.status, detail);
      // Return 200 anyway so the webhook doesn't retry-storm on a bad config.
      return Response.json({ ok: false, status: res.status }, { status: 200 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("notify-lead: unexpected error", err);
    return Response.json({ ok: false }, { status: 200 });
  }
});
