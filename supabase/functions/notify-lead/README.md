# notify-lead — email a notification on each new lead

A Supabase Edge Function that emails the business whenever a new row is inserted
into `public.leads` (the website quote form). Delivery is via [Resend](https://resend.com).

It is **inert until configured**: without the secrets below it returns `200 {skipped}`
and sends nothing, so it can be deployed at any time without affecting the live form
(the form writes to `leads` directly; this runs afterwards, out of band).

## What you need
- A Resend account + API key (`re_...`).
- A recipient inbox (e.g. `info@goldenstatewindows.com`).
- For production sending: a **verified domain** in Resend so mail can come `from`
  your own address. Until then it falls back to Resend's shared test sender
  (`onboarding@resend.dev`), which only delivers to the account owner's address.

## Setup (one time)

1. **Log in / link the project** (from the repo root):
   ```bash
   supabase login
   supabase link --project-ref <your-project-ref>
   ```

2. **Set the secrets** (never commit these):
   ```bash
   supabase secrets set RESEND_API_KEY=re_xxxxxxxx
   supabase secrets set LEAD_NOTIFY_TO=info@goldenstatewindows.com
   # optional, once your domain is verified in Resend:
   supabase secrets set LEAD_NOTIFY_FROM="Golden State Windows <leads@goldenstatewindows.com>"
   ```

3. **Deploy the function:**
   ```bash
   supabase functions deploy notify-lead
   ```
   Note the function URL: `https://<project-ref>.functions.supabase.co/notify-lead`.

4. **Create the Database Webhook** so an INSERT into `leads` calls the function.
   Dashboard → **Database → Webhooks → Create a new hook**:
   - Table: `public.leads`
   - Events: **Insert**
   - Type: **Supabase Edge Functions** → `notify-lead`
   - (Supabase adds the auth header automatically.)

   The webhook POSTs `{ type, table, record, ... }`; the function reads `record`.

## Test
```bash
# Simulate a webhook payload:
curl -X POST https://<project-ref>.functions.supabase.co/notify-lead \
  -H "Content-Type: application/json" \
  -d '{"record":{"name":"Test Lead","email":"test@example.com","phone":"(415) 555-0100","city":"Pacifica","project_type":"windows","message":"Testing","source":"website"}}'
```
Or submit the live contact form once the webhook is live.

## Notes
- The function always returns `200` (even on a Resend error) so a misconfiguration
  can't trigger a webhook retry storm. Check **Edge Function logs** if mail doesn't arrive.
- Secrets live in Supabase, not in this repo. Nothing here contains a key.
