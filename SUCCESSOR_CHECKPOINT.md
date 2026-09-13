# Successor checkpoint

Updated: 2026-09-12

## Current state

- Site: `https://astro.sandbox.codeworkslabs.dev/`
- Repository: `https://github.com/CodeWorksLabs/astro-sandbox-codeworkslabs-dev`
- Branch: `main`
- Cloudflare Worker configuration: `astro-sandbox-codeworkslabs-dev`
- Repository establishment originally preserved source without altering the live Worker; the repository-driven deployment cutover described below is now authorized.
- The site source is self-contained within this repository root.
- The prepared repository build pins annotated tag `v0.1.0-alpha.7` and verifies
  that it resolves to Analytics for Astro product commit
  `454893359f8588a71d35d51d1a5e0d16bf355c63` before packing version
  `0.1.0-alpha.7`.
- The core Astro integration uses Fathom sandbox site ID `KVFDQBQP` with
  `events: true`; the generated runtime loads Fathom with `data-auto="false"`.
- `npm ci`, the zero-vulnerability production audit, forced clean production
  build, and Wrangler dry-run passed on 2026-09-11. The current emitted runtime
  chunk is `_astro/page.DBe66kT6.js`, SHA-256
  `46aa7900e56ebf32e872fdffa104c7a770320ba55f0784462056612a90060e7d`.
- The deployed root returned 200, an unknown route returned 404, and
  `robots.txt` returned `User-agent: *` / `Disallow: /`. A clean-profile Chrome
  load of the real HTTPS site inserted the exact Fathom script and issued the
  pageview flow for `KVFDQBQP`; evidence is retained under
  `C:\Users\Owner\AppData\Local\Temp\afa-live-astro-20260911`.
- Provider acceptance was verified directly in Fathom on 2026-09-11 after an
  ordinary extension-free Edge visit: the dashboard showed one current
  visitor, one site visitor, and one pageview for `/`. Two earlier automated
  requests were explicitly bot-blocked and are not treated as acceptance
  evidence. The Fathom domain allow-list and IP block-list were inspected
  read-only and were empty.
- A temporary unlinked, `noindex` probe route imported the public client entry
  point and called `track("CWL Astro sandbox probe")` after adapter readiness.
  Fathom recorded exactly one view for the probe path and one event completion.
  The probe was then removed; the clean build was redeployed and its live URL
  now returns 404 while the root still returns 200 with `KVFDQBQP` present.
- Current deployed Worker version:
  `6835308e-75ce-49e4-bdbe-db6eab064e9a`.
- Integration changes remain local and uncommitted; no push was performed.
- The deployed UI expansion adds a shared Astro sandbox layout,
  primary navigation, a more informative home page, and `/analytics/` with two
  explicit event-client controls. The exact required footer wording remains
  `© 2026 CodeWorksLabs, a WebSynergetics property.` No automatic custom
  events, retries, queues, or synthetic traffic were added.
- The expanded site passed `npm ci`, `npm audit --omit=dev`, `npm run build`,
  and `npm run deploy:dry-run` on 2026-09-11 under Wrangler 4.131.1. Both the
  complete dependency audit and production-only audit found zero
  vulnerabilities.
- Rendered local-browser QA passed for the home page, primary navigation, and
  `/analytics/`. An explicit local button interaction returned the expected
  bounded `{\"ok\":false,\"reason\":\"disabled\"}` result because analytics is
  disabled in development. It emitted no provider traffic.
- The UI expansion was deployed on 2026-09-11. Live HTTP checks passed for the
  root and `/analytics/` with 200 responses, the unknown-route 404, and the
  blocking `robots.txt`. A live browser navigation and one explicitly
  authorized primary interaction returned `{\"ok\":true}`. The Fathom
  dashboard then showed `/analytics/` and exactly one unique/completion for
  `CWL Astro primary interaction`.
- The arbitrary event controls were subsequently replaced by a realistic,
  deployed journey: arrival at `/analytics/` supplies the landing pageview;
  `Continue to the next stop` records one `CWL Astro journey continued` event;
  and `/analytics/next/` supplies the destination pageview and displays the
  preceding client result. Local qualification returned the expected disabled
  result. The authorized live traversal returned `{\"ok\":true}`, and Fathom
  showed both journey pages plus exactly one unique/completion for the new
  journey event. This build passed the production audit, three-page Astro
  build, Wrangler dry-run, and `git diff --check` before deployment.
- No commit or push was performed.
- On 2026-09-11 the site advanced to the exact final Analytics for Astro
  `0.1.0-alpha.4` artifact, SHA-256
  `a7a14be4043495eeae5df9de098f2ba1301db5f1cab91666286285a53b0e4efe`,
  and plural `providers` configuration. The package remains private and was not
  published.
- The journey now derives its adapter selector from `configuredProviders()`.
  `track()` sends the event to all configured providers; the selected adapter
  is the criterion for advancing, and the destination renders each provider's
  independent outcome. With the current Fathom-only configuration, local and
  live browser traversals both displayed `Fathom accepted the event.`
- Before deployment, the site passed its complete and production-only audits
  with zero vulnerabilities, its three-page Astro build, and Wrangler 4.131.1
  dry-run. The package lock SHA-256 is
  `4ce3c4f3c1ee392e1512b111bfb8a1f113d9b4f1fab87c32ebc4c0f41db14283`.
- The alpha.4 deployment used Worker version
  `64688e90-ac31-4d5d-878d-ffc4e012fd74`. Live HTTP verification returned 200
  for root and both journey routes, 404 for an unknown route, and the expected
  blocking `robots.txt`. One authorized live journey event was sent during the
  browser verification. These site changes remain uncommitted and unpushed.
- On 2026-09-11 the site advanced to the exact final Analytics for Astro
  `0.1.0-alpha.5` artifact. `providerStatuses()` now gates the journey until
  the selected adapter reports real event readiness; configured no longer
  means ready. The exact install passed the zero-vulnerability production
  audit, three-page Astro build, and Wrangler dry-run. Package-lock SHA-256 is
  `a49ae8a9fb9d71e33ae7a42c9fbea1be0c1271f758cfe36e1c4bfc9dbfcea070`.
  Worker version `6835308e-75ce-49e4-bdbe-db6eab064e9a` is live. Root and both
  journey routes return 200, an unknown route returns 404, and `robots.txt`
  remains blocking. A clean in-app browser reported Fathom ready, sent one
  authorized journey event, and rendered `Fathom accepted the event.` The
  user's Chrome profile blocked the tracker and correctly stayed gated in the
  loading state. No commit or push was performed.
- Plausible was then added alongside Fathom with the supplied site-specific
  `https://plausible.io/js/pa-vcAvq0UHdTBO2WXWvp6qy.js` script. The emitted
  dual-provider runtime is `_astro/page.89PSSaCK.js`, SHA-256
  `c3081375954b863f5941eda3d1b5c7689de992ea706229013bd3fbd1dc6ea6dc`.
  The production audit, three-page build, emitted-runtime inspection, Wrangler
  dry-run, and `git diff --check` passed. Worker version
  `702f57c6-f71a-470a-8afb-2bd45c920979` is live; the three expected pages,
  unknown-route 404, and blocking `robots.txt` were reverified. A clean browser
  independently showed Fathom ready and Plausible ready. One selected-Plausible
  journey advanced with receipts for both `Fathom accepted the event.` and
  `Plausible accepted the event.` After explicit authorization, the Plausible
  `I've installed it` action advanced to the site dashboard and confirmed
  `🎉 Your first pageview has landed!`. Phil subsequently reported an
  independent Firefox load appearing in Plausible realtime as
  `1 current visitor`.

## Verification contract

Run `npm ci`, `npm audit --omit=dev`, `npm run build`, and `npm run deploy:dry-run`.

## Boundaries

Keep this stock. Do not install product integrations except for an explicitly authorized, bounded test phase.

Treat the checked-out \`main\` commit as the exact source identity. Verify it with
\`git rev-parse HEAD\` and confirm it matches \`origin/main\` before release work.

## GA4 alpha.6 implementation and sandbox deployment — 2026-09-11

Phil supplied separate GA4 Measurement IDs for the two dedicated sandboxes:
`G-T44ECDWXRJ` for `astro.sandbox.codeworkslabs.dev` and
`G-QNPCRXMMW5` for `stockstarlight.sandbox.codeworkslabs.dev`.

The package advanced locally from unpublished alpha.5 to unpublished
`0.1.0-alpha.6`. The GA4 browser adapter is now implemented rather than
validation-only. It owns its `gtag`/`dataLayer` bootstrap, emits configured
Consent Mode defaults before `config`, forces `send_page_view: false`, sends
Astro-lifecycle pageviews with current location/title and virtual referrer,
routes events to the configured Measurement ID, and reports independent
provider readiness/results. Deferred and external consent still fail closed
until a future activation API exists.

The existing internal review task performed multiple passes. It found and
closed substantive lifecycle, cleanup, exception-containment, GA limit, and
naming defects. Final review result: no actionable defects in the GA4 alpha.6
scope. Final source gates passed: strict typecheck plus 97/97 tests, zero npm
audit vulnerabilities, correct npm pack dry-run, and git diff check clean apart
from line-ending warnings.

The exact immutable local candidate artifact is:
`C:\Users\Owner\AppData\Local\Temp\afa-m2-alpha6-final-20260911\codeworkslabs-astro-analytics-0.1.0-alpha.6.tgz`
with SHA256
`162977FFE743B9339F0C70E4D236DA5A5616BCAC52FE27AEC6677DC3B2340A01`.
Byte-identical copies are present in both sandbox `vendor` directories.
Both sites reference that exact alpha.6 filename, retain Fathom and Plausible,
and add their separate GA4 providers with immediate analytics storage granted
and all three advertising consent fields denied. The Astro journey event was
renamed to the GA-compatible `cwl_astro_journey_continued`.

Both consumer installs, complete audits, production audits, Astro builds,
Wrangler dry-runs, and diff checks exited successfully. Both authorized
Cloudflare sandbox deployments then succeeded:

- Astro Worker version `4cdb0355-3426-43df-9c52-eb888769cb1b`.
- Stock Starlight Worker version `c515e878-f9da-4af9-a9be-23d276290777`.

HTTP checks after deployment returned 200 for both roots and representative
content routes; the Astro unknown route returned 404. A raw HTML substring scan
did not find provider markers because Astro emits the injected page runtime
through generated assets, so this is not a provider failure determination.
The next action is clean live-browser inspection of both sites: verify all
three configured provider statuses become ready, confirm the emitted Google
script marker and correct per-site Measurement ID, and send one explicitly
selected GA4 journey event from the Astro operator page. Then obtain
provider-side Realtime/DebugView evidence if available. Also remind Phil to
disable **Page changes based on browser history events** under Enhanced
Measurement for each GA4 web stream to prevent duplicate Astro SPA pageviews.

No commit, push, npm publication, tag, release, or production-site integration
occurred. Preserve all preexisting and current uncommitted work.

### GA4 live verification correction — 2026-09-11

Worker version `4cdb0355-3426-43df-9c52-eb888769cb1b` above was produced from
a stale pre-crash `dist` directory and uploaded no changed assets; it is not
evidence that alpha.6 was live. A direct clean rebuild emitted the correct GA4
marker and `G-T44ECDWXRJ`, after which five changed assets were uploaded as
Worker version `d62618e2-12a7-40f0-9c16-08e7c4cd2475`.

Live DOM inspection confirmed Fathom, Plausible, and the Google Analytics 4
script with the exact Astro Measurement ID. The operator surface reported GA4
ready. One explicitly selected GA4 journey event
`cwl_astro_journey_continued` advanced and the destination reported Plausible
and GA4 accepted; Fathom was `adapter-not-loaded` in that browser session. GA4
acceptance means the event entered the owned Google queue, not that Google's
reporting service received it.

Google-side receipt could not be verified: the intended Code Works Labs
Analytics property does not expose this stream, while the universal picker
finds `astro.sandbox.codeworkslabs.dev` only as a deleted property under the
separate `RVing Community` account. A valid stream in the intended account is
required before repeating Realtime/DebugView verification. Disable Enhanced
Measurement's browser-history page-change tracking on that stream to prevent
duplicate Astro lifecycle pageviews.

### Corrected Code Works Labs GA4 stream — 2026-09-12

The canonical Code Works Labs stream is now `G-BZRRREHHE5`, stream ID
`15764265298`, under `Code Works Labs / codeworkslabs.dev`. The site replaced
only the superseded Measurement ID. A clean install, complete and production
audits, three-page build, Wrangler dry-run, and diff check passed; both audits
reported zero vulnerabilities. `_astro/page.DZ8950CD.js` contains the new ID
and none of the superseded sandbox IDs.

Worker version `4e5cbe91-129c-40ed-a5c0-f78936d1c118` deployed four changed
assets. Live DOM inspection confirmed
`https://www.googletagmanager.com/gtag/js?id=G-BZRRREHHE5`. A Chrome journey
and an extension-free in-app journey both selected GA4 and advanced; the clean
receipt reported Fathom, Plausible, and GA4 all accepted the event. Google
Realtime still showed zero active users immediately afterward, so provider-side
receipt remains pending new-stream provisioning and must not yet be claimed.

### GA4 alpha.7 correction and provider qualification — 2026-09-12

The prior pending result was not provisioning delay. Alpha.6 queued ordinary
arrays, but Google's canonical gtag.js contract requires `arguments` objects;
Google therefore ignored the locally accepted commands. Reviewed unpublished
alpha.7 corrects that queue shape and adds an identity regression test. The site
vendors the exact final alpha.7 artifact, SHA-256
`1EEAD543DD0A9BFF4668B68BDA72554D0FF5C93A18118E8ED0A0FBCD2073EE9E`.

The clean install, both audits, three-page build, emitted-runtime inspection,
Wrangler dry-run, and diff check passed. The live corrected Worker is
`d1f95b77-fb8f-4bcf-86fe-eb36452fc7a0`; its runtime contains the minified
canonical `function(){dataLayer.push(arguments)}` implementation.

An extension-free GA4 journey advanced with all three provider receipts
accepted. Google Realtime then showed one active user, the Astro landing and
destination page titles, three aggregate sandbox pageviews, and
`cwl_astro_journey_continued` with event count one. Provider-side pageview and
custom-event qualification is complete. No commit or push occurred.

Phil subsequently reported GA4 path totals of three views for `/analytics/`
and two views for `/analytics/next/`, each with two active users. The shared
property also reported three `/` views across its two sandbox streams. This is
independent continued-ingestion evidence beyond the initial qualification.

### Repository-driven deployment cutover preparation — 2026-09-12

Phil authorized replacing local Wrangler deployments with permanent
repository-authoritative builds. The public sandbox repository now records the
exact private product commit, package version, tarball filename, and SHA-256 in
`analytics-source.json`; `vendor/*.tgz` is ignored so private pre-RC package
source cannot be committed publicly. The workflow uses a narrowly scoped GitHub
App to read the one private product commit, packs with pinned npm 11.12.1,
verifies the tarball hash, runs clean install, production audit, Astro build,
and Wrangler dry-run, then deploys only for trusted non-PR runs.

The exact candidate artifact was regenerated from product commit `4548933`, the
lockfile was refreshed from that artifact, and the local production audit,
three-page Astro build, Wrangler dry-run, workflow formatting, and diff check
passed. The workflow must not be pushed until `CWL_BUILD_APP_ID`,
`CWL_BUILD_APP_PRIVATE_KEY`, and `CLOUDFLARE_API_TOKEN` exist as repository
secrets; otherwise the repository deployment gate will fail before checkout.

### Public product-source correction — 2026-09-12

Phil confirmed that Analytics for Astro is developed in public. The private
pre-RC checkout and direct GitHub Actions deployment plan above is superseded.
The retained workflow checks out annotated public tag `v0.1.0-alpha.7` without
a GitHub App, verifies that it resolves to exact commit `4548933`, packs that
source on the runner, and runs the repository verification and Wrangler dry-run
gates. It does not deploy and does
not require `CWL_BUILD_APP_ID`, `CWL_BUILD_APP_PRIVATE_KEY`, or
`CLOUDFLARE_API_TOKEN`. Deployment remains with the repository-connected
Cloudflare build path when this local commit is separately authorized to push.
The fixed tarball-hash gate was removed after the first remote run proved that
`npm pack` archive bytes varied between the Windows and Linux pack environments
despite resolving to the same tracked source. The stable workflow identity is
the annotated tag plus its exact resolved commit; the runner-produced package
is then used for the clean consumer build. Earlier Windows tarball hashes remain
historical local/deployment evidence and are not cross-platform identities.

Before push on 2026-09-12, the corrected public-checkout artifact was installed
locally and the clean install, production audit, three-page Astro build, and
Wrangler 4.131.1 dry-run all passed. The production audit found zero
vulnerabilities. This verification performed no deployment.

The first pushed workflow run, `34731641997` at commit `853a3e2`, correctly
failed the nonportable tarball-hash gate. Commit `dd51db6` replaced that gate
with annotated-tag plus resolved-commit verification; GitHub Actions run
`34731822799` then completed successfully. The active workflow contains no
GitHub App credential reference, fixed tarball hash, or non-dry-run Wrangler
deployment. Cloudflare version history still ended at the existing manual
version `d1f95b77-fb8f-4bcf-86fe-eb36452fc7a0`, so these pushes did not deploy
or change Cloudflare configuration. The public sandbox remained HTTP 200.

### Matomo alpha.8 repository candidate — 2026-09-13

Phil authorized the bounded Matomo sandbox integration and repository-driven
deployment. The site now declares public Analytics for Astro tag
`v0.1.0-alpha.8`, resolved commit
`f480c3ce152c49637efcfea6dc38c7577fa28d82`, and exact package version
`0.1.0-alpha.8`. The local vendor artifact has SHA-256
`FE5C5FD1F8DFECDD2BF0C233663FE88507A5C9744DD6FE8C98E2D42AD71E0717`;
the GitHub workflow will pack the same tagged tracked source on Linux.

Matomo is configured with public tracker
`https://matomo.codeworkslabs.net/matomo.php`, standard sibling script
`https://matomo.codeworkslabs.net/matomo.js`, site ID `2`, and event category
`Astro sandbox`. Existing Fathom, Plausible, and GA4 configuration is retained.

The required clean install, complete audit, production-only audit, three-page
production build, emitted-runtime inspection, Wrangler dry-run, and diff check
passed. Both audits reported zero vulnerabilities. The exact lockfile SHA-256
is `E3AE90C07109E00AC634BFD5F87A4EB6D2755B62907967CC7AF85A2B27E25DD1`.
The emitted Matomo runtime is `dist/_astro/page.XC3D_5dm.js`, SHA-256
`8AC7E5828663CABED3D1203B82EC0775C08445038EBFDEB06C645E0E0F882C67`.
No deployment or provider-side receipt is claimed by these local gates.

The first remote alpha.8 verification run, `34747128536` at commit `280aee4`,
failed at `npm ci` before build or deployment. The public tag resolved to the
correct commit and packed successfully, but npm correctly rejected the Linux
tarball against the Windows-generated local-file integrity in the committed
lockfile. This is the previously documented cross-platform gzip identity issue,
not a source-content or Matomo failure. The workflow correction refreshes only
the runner-local package-lock metadata from the exact commit-pinned tarball
before `npm ci`; the tag and resolved commit remain the stable source identity.

Remote run `34747215514` proved that an ordinary package-lock-only install does
not refresh an unchanged local-file dependency's integrity. The replacement
step validates the declared tarball, installed package version, and resolved
lock path, computes SHA-512 directly over the runner-produced artifact, and
updates only that lock entry before the clean install.

Remote run `34747307640` completed successfully at commit `70b013e`. Every
declared verification step passed, including the exact public tag/commit
reconciliation, clean install, audits, production build, emitted-runtime
checks, and Wrangler dry-run.

The exact reviewed public alpha.8 package archive is now retained in this
repository as a deployment input. Its SHA-256 remains
`FE5C5FD1F8DFECDD2BF0C233663FE88507A5C9744DD6FE8C98E2D42AD71E0717`.
This makes a fresh Cloudflare Git checkout independently installable before any
custom build command runs. Older local package archives remain ignored. The
GitHub workflow continues to reconstruct and verify the annotated public tag
and exact commit independently; retaining this archive does not replace that
source-identity gate.

After making the archive trackable, a fresh sequential `npm ci`, complete
audit, production-only audit, three-page production build, and Wrangler dry-run
all passed. Both audits reported zero vulnerabilities. This verification made
no Cloudflare or provider mutation.

Commit `3282c42` retained the exact reviewed alpha.8 package and was pushed to
public `main`. GitHub Actions run `34767339313` completed successfully for that
exact commit. Cloudflare's native Builds integration was then connected to
`CodeWorksLabs/astro-sandbox-codeworkslabs-dev`, production branch `main`, with
build command `npm run build`, deploy command `npm run deploy`, root directory
`/`, and non-production branch builds enabled. Cloudflare reported that the
first repository-driven build would begin on the next push; this checkpoint
update is that triggering push. Live deployment and Matomo receipt remain to
be verified after the build completes.

The first repository-driven deployment completed as Worker version
`d3395153-82bb-47bc-b0f1-ca6b8e0dcf11`. The live site returned HTTP 200 and
its primary runtime contained the Matomo endpoint, but browser qualification
showed that the sandbox operator's local provider-label helper rendered Matomo
as a second `Plausible` choice. The helper now maps Matomo explicitly on both
journey pages. The three-page build and Wrangler dry-run passed. This is a
sandbox presentation correction; the reviewed alpha.8 package is unchanged.
