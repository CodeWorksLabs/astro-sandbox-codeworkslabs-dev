# Astro dependency correction and local preflight

Date: 2026-10-28, America/Los_Angeles. Owner: Analytics. Phil authorized
assessment/fixes in both sandboxes, rerun checks and independent reviews.
No push or deployment. No provider, live traffic or product-source change.
Astro Boss's cease was lifted by Phil and the task acknowledged this scope.

## Starting identity and contract

Repository CodeWorksLabs/astro-sandbox-codeworkslabs-dev, main.
Clean starting HEAD200473b1b582c6f675e2d0ea868b17f650a38312,
tree4090d14df58c6e4ac7a6b8f45acf21c909dd0d2e. Existing origin/main
134fa6cb870fe2f2cec3300da0cb1339fbce44b5 is unchanged.
Prior failed preflight is historical in DEPLOYMENT_CHECKS_20261028.md.

Preserve exact Alpha.23 artifact/source/manifest/workflow binding, all five
providers and immediate defaults, cwl_journey privacy, strict denied receipts,
UI, ownership and self-contained source. Fix affected dependency resolution;
do not suppress advisories, add overrides, force major updates or run fixes
against product/source/provider lanes. Source and supported contracts stay
unchanged, but framework/tooling execution and generated output need new checks.

## Assessment and corrections

Before production audit:8 affected package entries,6 high/1moderate/1low.
Full audit also identified fast-uri and the Wrangler/Miniflare development
chain. Raw before JSON is retained. These are advisory findings, not a claim
of reproduced exploitation in the assets-only Worker. Framework/build tools
and image processing have trusted execution roles even though no SSR backend
or public development server is deployed. Patch rather than waive them.

Direct pins: astro7.3.2 -> 7.3.3; wrangler4.131.1 -> 4.155.0. Node22.22.2
meets both engines, and Astro7.3.3 satisfies Alpha.23's >=7.3.2 <8 peer range.
Wrangler's official dependency moves Miniflare alpha to beta and Workerd to
1.20261023.1; these are upstream declared dependencies, not custom overrides.
Targeted npm update refreshed affected transitive packages within allowed ranges:

| Package | Before | After |
| --- | --- | --- |
| devalue | 5.9.2 | 5.9.4 |
| sharp | 0.35.4 | 0.35.5 |
| smol-toml | 1.8.0 | 1.9.1 |
| source-map-js | 1.2.1 | 1.2.2 |
| undici | 8.10.2 / nested7.29.0 | 8.12.3 / nested7.30.1 |
| vite | 8.2.2 | 8.3.5 |
| zod | 4.6.1 | 4.6.7 |
| fast-uri | 3.1.7 | 3.1.9 |

Complete lock delta is in lock-delta.json. It includes required native platform
packages, updated Vite/Rolldown/PostCSS children, Astro's find-proc/verkit change,
Wrangler/Workerd children and removal of redundant nested esbuild. Do not call
this an unchanged dependency graph or treat the large platform inventory as
unreviewed irrelevant files. No other direct dependency changed. No overrides,
audit suppression, analytics repackaging or force-fix was used.

Primary advisory evidence freshly consulted:
- Astro patched7.3.3: https://github.com/advisories/GHSA-mpr7-6m5w-76rw
- devalue: https://github.com/advisories/GHSA-j22f-vq7h-c4qm
- Sharp patched0.35.5: https://github.com/advisories/GHSA-wq5f-xc86-pv6w
- smol-toml: https://github.com/advisories/GHSA-r4xh-jqrq-34v2
- source-map-js: https://github.com/advisories/GHSA-68fv-2mgg-jv7q
- undici: https://github.com/advisories/GHSA-4w7w-5xrc-9h26
- Vite: https://github.com/advisories/GHSA-587h-7wmj-h5pm
- Zod: https://github.com/advisories/GHSA-mrhx-c7xc-m3w5
All additional advisory IDs/ranges, including fast-uri, are retained in the
full before-audit JSON. Registry version/engine metadata is saved beside it.

## Fresh author verification

Evidence root:
C:\Users\Owner\AppData\Local\Temp\astro-sandbox-dependency-fix-26670261e1ce4f76980f375665e1200a.
Normal install enabled lifecycle scripts. No provider script was fetched by
tests. Synthetic VM fixtures have no network transport. Registry audit traffic
was authorized. ASTRO_TELEMETRY_DISABLED=1, WRANGLER_SEND_METRICS=false,
NPM_CONFIG_UPDATE_NOTIFIER=false; Node22.22.2/npm11.12.1. Existing cache used,
no unrelated cleanup. Commands/logs/exits and before manifests retained.

| Gate | Result |
| --- | --- |
| Exact-pin lock updates and targeted transitive update | exit0 |
| npm ci | exit0;300 installed,301 audited;zero findings |
| npm audit --omit=dev --json | exit0;zero at every severity |
| npm audit --json | exit0;zero at every severity |
| npm test | exit0;16/16 |
| npm run check | exit0;11files,zero errors/warnings/hints |
| npm run build | exit0;3pages,10 output files |
| npm run deploy:dry-run | exit0;Wrangler4.155.0,assets only,no bindings |

No fresh execution failure occurred in these correction checks. Advisory data
is dated network evidence, not an enduring guarantee or independent code audit.
No remote CI, browser/provider ingestion or actual rollout was executed.

Lock SHA-2562e4664f92bdb4f45a1b1e46e570b737791b2cd2038fd32985499fa99ee44038a.
Output ledger SHA-2561f7c3d90757519a8b6185c0960c4447f487ade48573773f9d165ed3fd2ee95e0.
Output archive SHA-256c3683024da38c1af0f9041fdf2e828208dcb073aa532c89d4a1f7a4342f3abd4.
Compared with pre-correction output,10files remain; shared page JS changed name
and bytes and all3 HTML pages reference the new bundle. The other6files match.
output-delta.json records exact paths/hash differences. This is new generated
output; do not inherit old byte-based acceptance. No synthetic fixture markers
appear in dist. Generated node_modules,.astro/Vite,dist,Wrangler derived state,
npm metadata and named evidence/cache remain; no unrelated material removed.

Alpha.23 artifact remains SHA-256
190408df5cc9b34462081ed213669cbf1149d84e11123969cc82624a87691127,
source3a58043a6cc22a8778cc5c1d17cd9e15531d2bb3,19members/32,752bytes.
After all checks only continuity/control docs changed; those are not build
inputs. Exact final commit/tree will be in the freeze commissioning message.

## Independent review control (original candidate snapshot)

ID AFA-ASTRO-SANDBOX-DEPENDENCY-CORRECTION-20261028-01.
Requested type Composite candidate review: (1) dependency advisory closure and
resolution integrity; (2) whole consumer compatibility under corrected graph;
(3) installed artifact, fresh local checks, output and dry-run binding.
Requester Phil through Analytics, candidate owner Analytics, independent reviewer
named at commissioning. Review profile Static/read/in-memory only. Supplied
network/install/build evidence may be inspected; no reviewer network/writes.
Complete Code Review Doctrine path C:\CodeProjects\Governance\Boss\CODE_REVIEW_DOCTRINE.md,
52,273bytes/SHA-2565610f2ab5b2e9dc2cd649e2e11321dec6b5f1bacd174a1c32babd49174888c5d,
approved2026-08-27. Method audit not commissioned.

At the declared exact freeze, editing is stopped and queue empty. Scope includes
entire consumer, selected dependency graph/trusted roles, package/lock/manifest,
generated output, tests, CI and recovery. Product and Starlight are excluded;
canonical product is read only for artifact agreement. No prior PASS inherited.
Native browser/ClientRouter/accessibility, real providers/autonomy, remote CI,
live rollout/rollback, publication/deployment and product/release acceptance
remain excluded/open. Normal install/audits/build/dry run are now supplied
fresh evidence, not excluded as in the earlier local migration review.

## Original review result and submitted P3 correction

The internal independent sub-agent reviewed main2a29ef2eaf89513b87b4c28ca9e5ab1256806b8b,
tree222393a11eaf7ad45747fb103f01887596187e4e and returned INTERNAL CODE REVIEW
PASS WITH P2/P3 FINDINGS, with one P3 stale home-page version label,zeroP0-P2.
Read REVIEW_DEPENDENCY_CORRECTION_20261028.md for full coordinator record and
provenance; original full report is visible in Analytics. Source label now uses
Astro.generator; check/build/dry run and output-version assertion passed fresh.
New version-label-closure evidence has its own ledger/archive identities in
that record. No graph/test/config/artifact change occurred after2a29ef2;
affected source/home output and continuity records changed as declared.
Focused independent correction closure is pending at this pre-closure snapshot.
