# Independent local migration review record

Recorded by Analytics on 2026-10-28 from the full report returned in this chat
by independent reviewer `/root/astro_sandbox_alpha23_review`. This is the
coordinator's durable report record; the original report is preserved in that
reviewer's final chat response. No reviewer finding or disposition is changed.

## Exact review and decision

- ID: AFA-ASTRO-SANDBOX-ALPHA23-LOCAL-MIGRATION-20261028-01
- Type: Composite candidate review; bounded local demo preparation only.
- Requester: Phil through Analytics; candidate owner: root Analytics.
- Review owner: /root/astro_sandbox_alpha23_review; no candidate authorship.
- Profile: Static Review, read and process-local/in-memory diagnostics only.
- Doctrine: C:\CodeProjects\Governance\Boss\CODE_REVIEW_DOCTRINE.md;
  52,273 bytes; SHA-256
  5610f2ab5b2e9dc2cd649e2e11321dec6b5f1bacd174a1c32babd49174888c5d;
  approved 2026-08-27; reviewer acknowledged complete read including appendix.
- Method audit: not commissioned.
- Opening/closing main HEAD: b2654c8a7602f083ce07bb69bf79edd81fe696a1.
- Opening/closing tree: f5094ae99d18c73ceaad3dea0606401553cfda5b.
- Opening/closing origin/main: 134fa6cb870fe2f2cec3300da0cb1339fbce44b5.
- Opening/closing tracked, staged and relevant untracked state: clean;
  no source-boundary nested repositories/submodules found.
- Freeze acknowledged; implementation stopped; queue empty; no replacement
  or integrity event. Final state: DISPOSITION ISSUED.
- Census: P0 0 / P1 0 / P2 0 / P3 1. All declared scope inspected.
- Exact disposition: INTERNAL CODE REVIEW PASS WITH P2/P3 FINDINGS.

Required source/baseline, tarball, lock, manifest, workflow, installed package,
tests, configuration, logs, output ledger/archive and operational/attestation
records were present. Containers/databases were inapplicable. External/browser
evidence was explicitly excluded, not silently assumed.

## Full finding census

P3: SUCCESSOR_CHECKPOINT.md lines 20-23 in the frozen candidate describe work as
uncommitted and freeze as pending, although that file is already committed in
b2654c8. Statically confirmed by direct file/Git inspection on 2026-10-28.
Consequence: avoidable successor ambiguity; exact Git/freeze identity resolves
it, so the local executable candidate is not unsafe. Required property: date
the statement as pre-freeze history or replace it with exact candidate/current
gate. Closure evidence: inspect corrected checkpoint against unchanged
executable candidate. Owner Analytics, continuity gate only. Finding grants no
implementation authority. No other known findings were withheld.

## Threat model, coverage and behavior

Assets: truthful event receipts/navigation, consent decisions, token privacy,
package/source identity and reproducible output. Boundaries: visitor-controlled
URL/session storage, provider globals/downloaded scripts, operator build config,
vendored source, Node loader, CI actions and future Wrangler execution. Public
provider IDs are not administrative secrets. No server authentication/database.

The reviewer directly traced configuration normalization/HTTPS URLs/defaults,
GA Astro ownership/assertion and cwl_journey policy through generated runtime;
pending/denied zero-load, grant/regrant, idempotence, blocked-route and script
error/re-entry handling; all five provider paths and retained decisions; client
event validation and selected-provider success; strict response shape/provider
membership; session storage postconditions, expiry/future/replay and same-origin
handoff; identity stripping before redirect; browser no-op/navigation failures;
actual UI pending/denied/readiness, disabled click guard, live labels/text-only
rendering and polling/lifecycle cleanup; package/install/build/CI/loader trust;
and rollback/recovery/clean-document boundaries. Unique executable boundaries
were inspected directly without behavioral sampling. Static assets were
classified accordingly. Only the P3 continuity issue was established.

Malformed/denied selected outcomes cannot become successful destination
receipts. Text rendering prevents receipt data becoming HTML. Token-bearing
handoff contains no analytics bootstrap. Provider code remains an external
trust dependency; denial does not prove autonomous loaded-vendor traffic stops.

## Evidence ledger

Independent observation/replay:

- Node v22.22.2, `node --import ./fixtures/register-analytics-types.mjs --test`,
  exit 0, 16/16; synthetic VM collectors, no fetched vendor code/network client,
  no material persistent state created.
- All 19 tarball members agree with product source commit
  3a58043a6cc22a8778cc5c1d17cd9e15531d2bb3 after LF/CRLF normalization;
  installed members match tarball byte-for-byte.
- Tarball SHA-256
  190408df5cc9b34462081ed213669cbf1149d84e11123969cc82624a87691127.
- Lock delta limited to analytics binding and root engine metadata; unrelated
  dependency identities unchanged. Full SHA-pinned workflow/toolchain traced.
- Ten dist files agree with saved path/size/hash ledger; no fake.invalid,
  G-SYNTHETIC or PRIVATE_TOKEN_VALUE markers. Product clean when checked.
- Git safe-directory initially prevented canonical comparison; corrected
  per-command reads succeeded. Line ending differences reconciled. These were
  diagnostic issues, not package defects. No prior product PASS inherited.

Supplied author executions inspected, not rerun by reviewer: offline install301,
initial eight-pass/module-load failure ERR_UNSUPPORTED_NODE_MODULES_TYPE_STRIPPING,
then successful loader/final tests16; check11 zero findings; build3pages/10files.
Author exit/environment claims remain supplied provenance corroborated by logs.
Subsequent root engine/docs changes do not affect those exercised page/runtime,
dependency or toolchain inputs. Evidence root:
C:\Users\Owner\AppData\Local\Temp\astro-sandbox-alpha23-c6b5393593974776878da38c4dc0eb6e.
Archive SHA-256 b6973de5669c825ebbe27bf294c51b90b4044ed4bd841bf378268b54d337f759;
ledger SHA-256 e93149d9ed874f9bd23e0a793de8e8ec5e0dfa19aa21ffd54df5da4e7a54d679.
Phil's attestation is supplied operator evidence relayed by Astro Boss;
Alpha.21 deployment history was not current qualification.

The opening git-ls-files staged census bound all29 tracked members to the exact
tree above; reviewer closing hashes for every member are preserved in its tool
evidence. Core material hashes from its report:

```
e8b6a80473108f6d31957397029734f5d98cf6cbc3b2d43074a1fba75eeec970 .github/workflows/verify.yml
6dfb9079a3ef9b530b067895cdb280db3faa187f4120b03eb25cd317bf36e35c MIGRATION_ALPHA23.md
47ee617088108ce0eea391450b90dd78e507c02f0e0b049e88110e8567f2ea76 SUCCESSOR_CHECKPOINT.md
78b92cad8c00265968007cf1ef76aac7200ec737e79214d652792f93ba4fa806 analytics-source.json
749d5bb3e83d975c6b42fedcb5897197ab680dbe1ed2cae9254c3d02303d7739 astro.config.mjs
edebd5e910f5477f707bd17a38838741c5357807282c66f29e834c2bffc75e30 fixtures/analytics-consent.ts
1274784cb5d64bb6a53f85ce500e29b80ba47e1b6d4be0af7fec45c0cef7bf64 fixtures/register-analytics-types.mjs
9db19741334af2bcfb2586f62d0e3a161704f750c659078bdb0091871d1db30e package-lock.json
23bad90040114912d52de49df12b362d6a37775501fd888b5500484d36b6d298 package.json
8877119315f64f4edf9bcdd820f6edf8208951e6ad4c2983235d73c9aeaa4aee public/analytics/handoff/index.html
8defe9e54398d6077e4c7ab3cf16254f0871320bee316ac1cc8e161403edc72c src/lib/journey-receipt.ts
882d0f19e62f466614c47db00c8070787ba6ceb497739a3270ebd442237e7304 src/pages/analytics.astro
c7ae709151bfbb4fdff5464bce15a3ea787fb652c97801b23aa5ce4ac1d4ce07 src/pages/analytics/next.astro
4d13798ed2cedcdddad7c82d691b8acc6f7168ba750e37feacc097715861f1bb test/analytics-migration.test.ts
c0a2550d97e6eeeb94aa64ad107c7f9dcfd238ed3fdeff5d6805d4e57c6562af test/journey-receipt.test.ts
```

## Individual gates and limits

1. Source/config/receipt/UI correctness: PASS WITH P3 finding.
2. Exact artifact/lock/manifest/workflow binding: PASS.
3. Deterministic evidence adequacy for local demo preparation: PASS.

No requested local scope remains unreviewed. Native browser/ClientRouter and
accessibility, provider ingestion/autonomous traffic, lifecycle-enabled normal
installation, audit, Wrangler dry run, remote CI, executed rollout/rollback and
release acceptance remain open/excluded. Starlight needs its own candidate.
Reviewer inherited history/positive framing, was independent of authorship,
not blind; no prior PASS or schedule shortcut used. No reviewer persistent
residue/writes/network/cleanup. Author node_modules/.astro/Vite/dist and named
evidence/cache remain. This review authorizes no push/deploy/provider action.

## Post-review documentation follow-up

This file and the corrected checkpoint are a declared documentation-only
follow-up after disposition, not a silent change to the reviewed candidate.
Source/runtime/tests/artifact/dependencies/config/workflow/output remain
unchanged. Original review identity remains b2654c8; focused continuity closure
must inspect the new record/checkpoint. No new full-candidate PASS is inferred.

## Focused closure result recorded after disposition

Review AFA-ASTRO-SANDBOX-ALPHA23-CONTINUITY-20261028-01, Correction Closure Check,
by the same independent reviewer, concluded INTERNAL CODE REVIEW PASS. Exact
opening/closing main23bd2f4c83ba695e45701845fa5f28a019795aa8,
tree23148bbb27be23674803b479c4bb10edec107227, upstream134fa6cb870fe2f2cec3300da0cb1339fbce44b5,
clean tracked/staged/relevant untracked state. Static profile, full doctrine
identity freshly verified, method audit not commissioned, freeze acknowledged,
queue empty, DISPOSITION ISSUED. No writes/network/residue or candidate authorship.

All focused scope was inspected: corrected checkpoint, accuracy of this
coordinator record against the full original report, and unchanged executable
and evidence boundary. Threats were successor ambiguity, wrong attribution or
promotion of a disposition, and silent executable/evidence drift. P3 closed;
P0/P1/P2/P3 all zero open. Two-document delta only; runtime, tests, fixtures,
artifact, lock, manifest, config, workflow and deployment instructions unchanged.
All dist files still match the original ledger; artifact/archive/ledger hashes
remain as above. No rerun was necessary for non-build-input documentation.
Fresh reading/in-memory observations establish closure, rather than inherited
PASS. Prior report exposure disclosed; no sampling. No focused scope remains.

Closure member hashes:
- SUCCESSOR_CHECKPOINT.md: a1c84af46817838704e6a6a1b8e547b2b53e89104bbec6cb8bacb6f4437e3878
- REVIEW_ALPHA23_LOCAL.md: f7eb0cb29bb4b8fc34a2c1c855207efb0fbcb1fc590060f980fc78b58a2b4426

This added result entry and corresponding checkpoint update are later
record-only changes; the reported closure identities remain historical exact
identities. They do not imply a new full-candidate disposition. All excluded
browser/provider/install/audit/Wrangler/CI/rollout/release gates remain open.
