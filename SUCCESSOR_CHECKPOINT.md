# Astro Analytics Sandbox Handoff

Updated: 2026-10-28

## Current deployment-check state

Phil authorized deployment checks on 2026-10-28, still with no push/deployment.
Against source HEAD 740f05edae710b2b18053a3198ac5f38f5b1a790, normal npm ci,
16 tests, rebuild and Wrangler dry run succeeded. Production npm audit failed:
8 affected package entries (6 high,1 moderate,1 low). No dependencies were
changed or fixes applied. Deployment checks are NOT all green.

Read DEPLOYMENT_CHECKS_20261028.md for command exits, audit packages, evidence
and boundaries. New10-file output is byte-equal to the reviewed10-file output.
Records added after execution do not alter that executable/output identity.
Next: decide a bounded dependency correction, then rerun affected gates; do
not deploy or treat the earlier local review as audit/release acceptance.

## Reviewed local migration record (before deployment checks)

An authorized local-only Alpha.23 candidate is being prepared on main. Read
MIGRATION_ALPHA23.md for the exact artifact/source pin, Phil's dated operator
attestation, mutation boundary, verification state and rollback identity.
Restart recovery on 2026-10-28 confirmed the local changes and evidence survived.
The exact vendored Alpha.23 SHA-256 is
190408df5cc9b34462081ed213669cbf1149d84e11123969cc82624a87691127.
Fresh local verification before shutdown passed: offline clean install (301
packages), final npm test (16/16), Astro check (zero findings), and build
(three pages). The initial Node type-stripping failure is retained alongside
the successful scoped-loader runs. Read MIGRATION_ALPHA23.md for limitations
and exact log/archive identities. This restart verified the saved evidence;
it did not rerun those commands.

The local executable candidate is committed on main as
b2654c8a7602f083ce07bb69bf79edd81fe696a1, tree
f5094ae99d18c73ceaad3dea0606401553cfda5b, atop existing origin/main
134fa6cb870fe2f2cec3300da0cb1339fbce44b5. Independent review
AFA-ASTRO-SANDBOX-ALPHA23-LOCAL-MIGRATION-20261028-01 concluded
INTERNAL CODE REVIEW PASS WITH P2/P3 FINDINGS for the bounded local preparation
gate: P0 0, P1 0, P2 0, P3 1 (this checkpoint's stale pre-freeze wording).
See REVIEW_ALPHA23_LOCAL.md for the report record and limits. The current
documentation-only follow-up corrects that wording and records the review;
it does not change runtime, tests, dependencies, configuration or output.
The original disposition remains bound to the exact candidate above; no PASS
is inherited for changed documentation. Focused continuity closure
AFA-ASTRO-SANDBOX-ALPHA23-CONTINUITY-20261028-01 concluded INTERNAL CODE REVIEW
PASS at documentation commit 23bd2f4c83ba695e45701845fa5f28a019795aa8, tree
23148bbb27be23674803b479c4bb10edec107227: the P3 is closed, with no new findings.
The reviewer freshly confirmed only two documents changed and that artifact,
executable, tests, configuration, workflow and all output hashes are unchanged.
This subsequent entry records that result only; it is not a new candidate PASS.
Next local work is Starlight's independent consumer review; this Astro candidate
requires no further local code correction from these reports.
No audit, Wrangler
dry run, native browser or live provider verification has been performed for
this candidate. Nothing has been pushed or deployed. Starlight is the next
separately reviewed local candidate; inspect its own checkpoint for current state.

Product HEAD remains 20ab007c597d1750c2a6234741d368d36665ce4c with a clean
worktree. Astro Boss's 2026-10-28 routed authorization and operator attestation
were re-read after restart. That chat is ceased at Phil's request; a progress
report must not be treated as permission to resume its work or demand action.
The Alpha.21 deployment evidence below is historical and was not reverified.

## Historical Alpha.21 boundary

- This repository owns `astro.sandbox.codeworkslabs.dev`.
- The qualified consumer integrates Analytics for Astro `0.1.0-alpha.21`
  from product commit `40713fc7f52ac1b3a0e968d995de10640f851934`.
- The exact package is 28,046 bytes with SHA-256
  `0237b5d93c79b4ea90b842f96079e759076c0ea87ea01f97097383998541a9c7`.
- Consumer commit `91f9c9fd8427ea0ab94bec2e367337dd90f6e512`
  is pushed and deployed.

## Historical live-state record

- The live Cloudflare Worker version is
  `78d93a62-e8fe-4c2d-b574-7e6b6ff140cd`.
- It deploys the qualified Alpha.21 consumer from commit `91f9c9f`.
- `https://astro.sandbox.codeworkslabs.dev/analytics/` and `/analytics/next/`
  returned HTTP 200 after deployment. The live analytics bundle contains all
  five configured provider integrations.

## Historical Alpha.21 verification

- A clean local install resolved the exact Alpha.21 package.
- Fresh verification passed: production dependency audit with zero
  vulnerabilities, 8/8 site tests, Astro diagnostics with zero findings,
  a three-page production build, and a 14-asset Wrangler deployment dry run.
- GitHub Actions run `34933965184` passed against the pushed consumer commit.
- All five configured providers remain present in the built output. The
  Alpha.21 event-property correction rejects malformed public-browser property
  bags before provider dispatch. No release or product-risk acceptance occurred.

## Historical Alpha.21 recovery

- The pre-cleanup 17-commit local history is preserved in
  `C:\CodeProjects\Archives\Astro Analytics Recovery\2026-09-14\astro-sandbox-before-cleanup.bundle`.
- Alpha.21 is locally qualified, pushed, and deployed for this consumer.
- Product development does not authorize GitHub, credential, Cloudflare,
  deployment, or release changes.
