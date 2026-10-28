# Local Alpha.23 migration control

Updated: 2026-10-28, America/Los_Angeles.

Owner: Astro Analytics, acting under Phil's local two-sandbox migration
authorization relayed by Astro Boss. This candidate owns only the plain Astro
sandbox. Starlight is a later separate candidate. No live/provider traffic,
provider setting changes, push, publication or deployment is authorized.

## Starting identity and rollback

- Repository: CodeWorksLabs/astro-sandbox-codeworkslabs-dev
- Branch: main
- Starting HEAD/upstream: 134fa6cb870fe2f2cec3300da0cb1339fbce44b5
- Starting tree: 952289b38f5f467016e9c43b087cc58adbc07617
- Executable Alpha.21 consumer: 91f9c9fd8427ea0ab94bec2e367337dd90f6e512
- Starting worktree: clean
- Previous exact Alpha.21 tarball is retained in vendor; SHA-256
  0237b5d93c79b4ea90b842f96079e759076c0ea87ea01f97097383998541a9c7.

## Provider prerequisite evidence

Phil explicitly attested on 2026-10-28 that the named Page views/history-based
collection setting is OFF on both existing sandbox web streams, has always
been off, and he never enabled it. Astro Boss relayed that attestation and
authorized this migration in task 019f954e-a5d3-77f1-ad33-fa44553040c9.
This site's unchanged Measurement ID is G-BZRRREHHE5.

Classification: direct operator attestation from Phil, relayed through Astro
Boss; not browser inspection or independent provider verification by this task.
The existing blocker is resolved by that accepted evidence. No provider was
accessed and no setting was changed. historyPageviewsDisabled:true records the
attested prerequisite; it is not a claim the package can inspect GA Admin.

## Exact target and mutation scope

- Package: 0.1.0-alpha.23, 19 members, 32,752 packed bytes
- Package-source commit: 3a58043a6cc22a8778cc5c1d17cd9e15531d2bb3
- Executable ancestry: 50d659900d53f2586e37208064226666ea7f981a
- Product checkpoint: 20ab007c597d1750c2a6234741d368d36665ce4c
- Tarball SHA-256:
  190408df5cc9b34462081ed213669cbf1149d84e11123969cc82624a87691127

Bind the vendored artifact, dependency/lock, source manifest and workflow pin
atomically. Retain cwl_journey privacy, site-side IDs/endpoints, event settings
and ordinary immediate consent defaults. GA4 explicitly uses Astro ownership
with the operator assertion. Add denied-state UI and strict receipt support,
bounded synthetic consent fixtures, deterministic tests and continuity records.
No product source or other site changes belong to this candidate.

## Verification and gate

Author execution profile: Local Verification for this site and named disposable
derived state. Fake providers/VM collectors must not load vendor code or send
requests. Deferred/external states belong to explicitly synthetic fixtures;
they do not alter the normal site defaults or add CMP/persistence policy.

Evidence/cache root:
C:\Users\Owner\AppData\Local\Temp\astro-sandbox-alpha23-c6b5393593974776878da38c4dc0eb6e.
The initial lock update used npm package-lock-only, offline, ignore-scripts,
no-audit/no-fund, exit 0. No dependency versions outside analytics were changed.
Fresh local results:

- npm ci --offline --ignore-scripts --no-audit --no-fund: exit 0, 301 packages,
  using the existing npm cache; no cache cleanup or dependency version change.
- Initial npm test: the eight existing tests passed; the new module failed to
  load because Node 22 refuses native type stripping under node_modules.
  test.log preserves ERR_UNSUPPORTED_NODE_MODULES_TYPE_STRIPPING.
- A package-scoped built-in test loader strips only this installed integration's
  TypeScript source for Node tests; no package or dependency was modified.
  npm test then passed 16/16, exit 0, including the final ordinary CI-equivalent
  command. test-loaded.log and test-final.log retain both successful runs.
- npm run check: 11 files; zero errors, warnings or hints; exit 0.
- npm run build: three static pages; exit 0; 10 output files. No synthetic
  fixture endpoint/ID/token markers appear in production output.
- git diff --check: pass.

ASTRO_TELEMETRY_DISABLED=1 and npm update notifications were disabled during
verification. Node was 22.22.2 and npm 11.12.1. The site engine floor is aligned
to the product's already-required 22.18.0; the final lock update only changes
analytics identity and that root engine metadata. Other dependency versions are
unchanged. The source/build inputs did not change after the successful build;
the final root engine metadata alignment does not alter output on this same
verified toolchain. README/control/recovery records are not page build inputs.

Build evidence: dist-ledger.json records every path, byte count and SHA-256.
The immutable local dist.zip has SHA-256
b6973de5669c825ebbe27bf294c51b90b4044ed4bd841bf378268b54d337f759.
Ledger SHA-256:
e93149d9ed874f9bd23e0a793de8e8ec5e0dfa19aa21ffd54df5da4e7a54d679.
Generated residue is node_modules, .astro/Vite cache, dist, npm cache metadata
and the named local logs/archive. No old or unrelated cache was removed.
No prior build/review result is inherited. The earlier Vite EPERM runs remain
historical failures; the successful gates above are this fresh candidate's runs.
No audit, Wrangler/provider dry run, browser, provider ingestion, deployment or
live analytics traffic is claimed. Those gates remain open and unauthorized.

Before review, record exact source/tree/artifact and opening/closing state,
test commands/exits, generated output, residue and any unavailable gates.
Independent consumer-migration review must use the complete controlling Code
Review Doctrine (52,273 bytes; SHA-256
5610f2ab5b2e9dc2cd649e2e11321dec6b5f1bacd174a1c32babd49174888c5d),
with an exact freeze and empty queue. Native browser/ClientRouter behavior,
provider ingestion/autonomous traffic and deployment remain unexecuted unless
separately authorized. Local deterministic review cannot close those gates.

Mixed-version document runtimes are unsupported. Any later authorized rollout
or rollback requires a clean document boundary and exact asset/package identity;
do not assume safe hot replacement or discard an actually persisted denial.
