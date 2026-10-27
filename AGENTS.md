<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Business info lives in src/config/site.ts; services content in src/config/services.ts — edit there, never hardcode in components.
- WhatsApp links are built only via src/lib/whatsapp.ts so messages stay consistent and encoded.
- Each service has its own flat route file (/<slug>) rendering the shared ServicePage template.
- Canonical/sitemap base URL is SITE_URL in src/lib/seo.ts; update it when the real domain is set.
