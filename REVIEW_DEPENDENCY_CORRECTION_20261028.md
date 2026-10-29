# Astro dependency review record

Coordinator record by Analytics,2026-10-28. Original full report is the final
chat response from independent sub-agent /root/astro_sandbox_alpha23_review.
This is a durable summary, not a verbatim reviewer-authored report. Findings,
identities, exclusions and disposition are preserved without promotion.

## Exact original review

AFA-ASTRO-SANDBOX-DEPENDENCY-CORRECTION-20261028-01, Composite candidate review.
Requester Phil via Analytics; candidate owner root Analytics; reviewer the
internal sub-agent named above. Static read/in-memory profile, no writes,
network, install, audit calls, providers or cleanup. Full doctrine+appendix
previously read through EOF, identity freshly verified: 52,273bytes,approved
2026-08-27,C:\CodeProjects\Governance\Boss\CODE_REVIEW_DOCTRINE.md,SHA-256
5610f2ab5b2e9dc2cd649e2e11321dec6b5f1bacd174a1c32babd49174888c5d.
Method audit not commissioned. Freeze acknowledged before tracing; source
stopped,queue empty,no replacements/integrity events; DISPOSITION ISSUED.

Opening/closing main HEAD2a29ef2eaf89513b87b4c28ca9e5ab1256806b8b,
tree222393a11eaf7ad45747fb103f01887596187e4e,
origin/main134fa6cb870fe2f2cec3300da0cb1339fbce44b5,
baseline200473b1b582c6f675e2d0ea868b17f650a38312. Clean tracked/staged/relevant
untracked state; no source nested repo/submodule. All32 tracked members and
supplied evidence have closing SHA-256 ledgers in reviewer tool evidence.

Required source/baseline,package/lock before/current,advisory/registry records,
full delta,installed deps,artifact/tests/check/build/dry-run/exits/output ledgers,
workflow/recovery were present. Containers/databases inapplicable. Exclusions
explicit. No requested material scope remained unreviewed or findings withheld.

## Finding and exact disposition

P0 0/P1 0/P2 0/P3 1. Original disposition:
INTERNAL CODE REVIEW PASS WITH P2/P3 FINDINGS.

P3: src/pages/index.astro:18 and fresh dist/index.html show Astro7.3.2 in Current
environment although pinned/installed framework is7.3.3. Independently observed
in source,installed package and fresh output on2026-10-28. Misleads an operator
about candidate version; not unsafe local runtime. Required property: displayed
version agrees with candidate or avoids stale exact assertion. Closure evidence:
correct source and regenerated home output with refreshed identity. Owner
Analytics,clarity/generated representation gates. Finding grants no authority.

Three sub-gates: advisory closure/resolution integrity PASS; whole-consumer
compatibility PASS WITH P3; installed artifact/fresh local output/preflight
binding PASS WITH P3. No blocking correction for the exact local gate.

## Threats, coverage and evidence

Assets: advisory closure,resolution/native/build trust,correct static output,
operator truth,consent/receipts/navigation/token privacy. Boundaries: registry
metadata/archives,integrity lock,native hooks,Astro/Vite/Rolldown execution,
Wrangler/Miniflare/Workerd,CI,operator public IDs,visitor URL/session/provider
globals. No consumer SSR/auth/database. Static hosting does not remove build
trust. Unique boundaries directly inspected; native platform families accounted
as alternatives, not ignored bulk. No exhaustive third-party-audit claim.

Reviewer reconciled all95 lock-object changes with required roles/ranges,
engines,integrities/registry origins,installed versions,platforms/deduplication;
normal-install native esbuild/Workerd scripts and fallback behavior; whole
consumer config/consent/privacy/receipt/handoff/UI/CI/recovery; new output and
local preflight. Corrected versions and advisory chains agreed, with no custom
overrides/range mismatches/unexpected remote source. Analytics remains local.
Root esbuild0.28.2 replaces redundant nested family. Node22.22.2 meets active
requirements; optional non-host Sharp Windows ia32 declares Node^20.9.0 and
was not qualified. Native fallback/all-platform paths were not all exercised.

Fresh independent replay:16/16 tests,exit0; all19 artifact members agree with
canonical3a58043a6cc22a8778cc5c1d17cd9e15531d2bb3 after LF/CRLF normalization,
installed bytes match tar; before-lock matches baseline; installed versions
match lock; consumer source/config/tests/workflow/manifest unchanged at2a29ef2.
Actual new shared bundle replayed in synthetic plain/simulated-router DOMs:
five scripts captured without fetching,all five event adapters accepted,
denial and blocked-token route suppressed subsequent package calls. All10
current output files matched new ledger,not inherited old-byte acceptance.

Supplied author evidence inspected rather than rerun: normal ci300 installed/
301 audited zero; production/full audits zero; tests16; check11zero; build3pages/
10files; Wrangler4.155.0 assets-only dry run0; exits agree. Telemetry/env claims
remain supplied provenance. No observed claim of underlying exploitability or
enduring advisory guarantee. Native/live/browser/remoteCI/rollout remain open.

Evidence directory and full commands: DEPENDENCY_CORRECTION_20261028.md.
Original material hashes:
```
2e4664f92bdb4f45a1b1e46e570b737791b2cd2038fd32985499fa99ee44038a package-lock.json
c062b5e1fe7115507ddc36e77679d5315faa8f123c55fbf52a5a13feb07e6c37 package.json
042f9da6726413ecc9ac3b7d550e697fbc1cd800750294c86c4c65c5dff586fb DEPENDENCY_CORRECTION_20261028.md
981ae5f36d1c7a95255b980416e5165989733b460396d9a22ccb0b15396881b1 SUCCESSOR_CHECKPOINT.md
abd6fcb15869ba8ed22df2723af93de5550638e8f8bedd9f11c8d3634f7b918f src/pages/index.astro
190408df5cc9b34462081ed213669cbf1149d84e11123969cc82624a87691127 Alpha.23 tarball
3f5a59adf34a32f966719df3bc3a3c2a6926e04b6fad4d7abd7c79bb7bb0ea03 audit-before-full.json
c6fa1bde6d6b4a23c1578a0de454e725c1a144079ad18d5465676e0e2c9eb89b audit-prod.json/audit-full.json
138cdab4262e41439a6d0976f664057bb6bd8a25ed46eb757ae1f981968f0332 lock-delta.json
446c793dec2626f7b42771a0108fd75845217f66894b4634eb8b7ad76023eafb output-delta.json
eabc59cfeb00d9ffa51cb6c897273caa54316c74970d37c134e1db1ce79f7280 exits.json
1f7c3d90757519a8b6185c0960c4447f487ade48573773f9d165ed3fd2ee95e0 original dist-ledger.json
c3683024da38c1af0f9041fdf2e828208dcb073aa532c89d4a1f7a4342f3abd4 original dist.zip
```

Source-level prior evidence carried only after exact unchanged source analysis;
new framework/install/audit/output claims refreshed. No prior PASS inherited.
Reviewer authored none of candidate/corrections,had earlier review exposure,
independent of authorship not blind. No reviewer residue; author generated
dependencies/cache/dist/Wrangler/evidence remain. Excludes native browser/
ClientRouter/accessibility,provider code/autonomy/ingestion,remoteCI,live
rollout/rollback,publish/deploy,release/product acceptance. No authority implied.

## Submitted P3 correction (pre-closure snapshot)

After the original disposition, source changed only the displayed literal to
`Astro.generator`, so future patches do not require another manual label update.
No dependency,config,analytics/test/CI behavior changed. New check/build/dry-run
and actual output-version assertion passed,exit0; built label is Astro v7.3.3.
New immutable evidence is in the original root's version-label-closure folder:
ledger5cf07dbe218798870209e4897d474bff44cfbdd425812c581b9caa517084fd88,
archive4354777a91bd2b194393abb7989db192c01f0a46f01c29626e08170ffe45adfd.
Original graph/audit/install/test evidence keeps its original provenance, with
unchanged graph/tests/toolchain; changed home output is refreshed. This report,
control and checkpoint are non-build-input records. Exact correction freeze
will be declared at commissioning. Focused closure pending at this snapshot;
the original disposition remains bound to2a29ef2,not promoted to a new candidate.
