# astro.sandbox.codeworkslabs.dev

The clean stock-Astro control used for CodeWorksLabs Astro product testing.

Production URL: https://astro.sandbox.codeworkslabs.dev/
Cloudflare Worker configuration name: `astro-sandbox-codeworkslabs-dev`

## Local verification

```sh
npm ci
npm audit --omit=dev
npm test
npm run check
npm run build
npm run deploy:dry-run
```

The dry run does not publish. Deployment is deliberately separate and requires explicit authorization.

## Historical Alpha.23 migration

The original Alpha.23 migration vendored its accepted package and
keeps the site's provider IDs and immediate consent defaults. GA4 explicitly
uses Astro-owned pageviews with Phil's 2026-10-28 operator attestation that the
stream's history-pageview collection is off. See `MIGRATION_ALPHA23.md` for
provenance, exact identity, verification limits and the independent review gate.
This is not a claim of deployment or provider verification.

Use Node 22.18.0 or later; the verification toolchain is Node 22.22.2 and npm
11.12.1. `npm test` includes a package-scoped built-in TypeScript loader because
Node does not natively strip the integration's source under `node_modules`.
Synthetic consent fixtures live under `fixtures/` and are not imported by site
pages. Their fake providers and simulated lifecycle events do not prove native
browser behavior or delivery. They do not change ordinary site defaults.

For local diagnostics/builds, `ASTRO_TELEMETRY_DISABLED=1` disables Astro's
telemetry. Audits and Wrangler dry runs remain release gates; they were not run
as part of the no-provider-traffic deterministic migration preparation.

## Dependency correction preflight

The 2026-10-28 corrected candidate pins Astro7.3.3 and Wrangler4.155.0, with
targeted compatible security updates in the lockfile. See
DEPENDENCY_CORRECTION_20261028.md for fresh normal-install, zero production/full
audit, test/check/build/dry-run evidence and the separate independent review.
Earlier migration/audit records are historical. No push or deployment is implied.

## Rights

Site software and content carry no repository-wide license unless a file explicitly states one. Artwork is not open licensed by publication or repository access. The public ownership wording is `© 2026 CodeWorksLabs, a WebSynergetics property.`

## Analytics RC.1 trial

The Analytics trial installs exact npm version `0.1.0-rc.1`. The source
manifest and committed reference tarball bind the registry dependency to the
reviewed release bytes; normal builds use the public registry lock entry.
