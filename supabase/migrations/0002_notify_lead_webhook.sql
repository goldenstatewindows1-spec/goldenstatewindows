-- Email notification on each new lead: AFTER INSERT on public.leads calls the
-- notify-lead edge function (Resend) via pg_net, fire-and-forget.
-- Mirrors the live schema so the setup is reproducible from source.

create extension if not exists pg_net;

-- Errors are swallowed so a webhook problem can never break the public
-- contact form's insert.
create or replace function public.notify_lead_webhook()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  begin
    perform net.http_post(
      url := 'https://hkejttwuijbufnqfpcfc.supabase.co/functions/v1/notify-lead',
      body := jsonb_build_object(
        'type', 'INSERT',
        'table', 'leads',
        'schema', 'public',
        'record', to_jsonb(new)
      ),
      headers := '{"Content-Type": "application/json"}'::jsonb
    );
  exception when others then
    raise warning 'notify_lead_webhook: %', sqlerrm;
  end;
  return new;
end;
$$;

revoke all on function public.notify_lead_webhook() from public, anon, authenticated;

drop trigger if exists notify_lead_webhook on public.leads;
create trigger notify_lead_webhook
  after insert on public.leads
  for each row execute function public.notify_lead_webhook();
