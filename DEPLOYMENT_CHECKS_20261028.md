# Astro sandbox deployment checks

Executed 2026-10-28 under Phil's explicit deployment-check authorization.
No push, publication, deployment, provider setting change or live analytics
test was authorized or performed. This is execution evidence, not a new code
review or product/release acceptance.

## Identity and execution

Opening main HEAD740f05edae710b2b18053a3198ac5f38f5b1a790,
tree34a9157566db27cf0a44f5f3d8aab83f8c4aadfd, clean. Existing origin/main
134fa6cb870fe2f2cec3300da0cb1339fbce44b5. Reviewed executable candidate
b2654c8a7602f083ce07bb69bf79edd81fe696a1. Alpha.23 tarball unchanged:
SHA-256190408df5cc9b34462081ed213669cbf1149d84e11123969cc82624a87691127.

Node22.22.2/npm11.12.1. ASTRO_TELEMETRY_DISABLED=1,
WRANGLER_SEND_METRICS=false, NPM_CONFIG_UPDATE_NOTIFIER=false. Wrangler logs
directed to the named evidence directory. Existing npm cache used; no cleanup.
Normal install enabled dependency lifecycle scripts (esbuild/workerd and
platform-optional packages). Public registry/advisory queries were permitted by
the requested checks; no provider account mutation or browser traffic occurred.

| Command | Exit | Result |
| --- | --- | --- |
| npm ci | 0 | Normal clean install; full-tree audit summary11 vulnerabilities |
| npm audit --omit=dev --json | 1 | Production audit8 affected package entries |
| npm test | 0 | 16/16 |
| npm run build | 0 | 3 pages,10 output files |
| npm run deploy:dry-run | 0 | Wrangler4.131.1, assets-only Worker, no bindings, dry-run exit |

Production audit severity census: high6, moderate1, low1, critical0.
Affected package entries: astro(low), devalue(high), sharp(high),
smol-toml(moderate), source-map-js(high), undici(high), vite(high), zod(high).
The raw audit.json preserves all advisory URLs/ranges and suggested fixes.
These are current registry audit findings, not independent exploitability
determinations for this static site. No npm audit fix or dependency edit ran.

## Evidence, generated state and impact

Evidence root:
C:\Users\Owner\AppData\Local\Temp\astro-sandbox-deployment-checks-533dc92d51cf480ca50f68e7c6971eca.
Includes ci.log,audit.json,audit-stderr.log,test.log,build.log,dry-run.log,
wrangler.log,exits.json,dist-ledger.json and dist.zip.
Ledger SHA-256fb53087b80fe5bb037e6dd998f9621c0b3e07cc5a68a5a24e1a52e85b85606ae.
Archive SHA-2568eee46e8ddeec4d013c775bed2c16597c4c02edb61829906621e480843ba5ba6.
All10 output paths/byte counts/SHA-256 match the independently reviewed local
build ledger; no generated runtime change resulted from normal lifecycle
installation. A differently serialized ledger/archive has its own identity.
Wrangler's CLI reports reading14 entries; the exact filesystem ledger records
10 files. Do not substitute the CLI count for the file inventory.

Generated residue remains node_modules, .astro/Vite, dist, any ignored Wrangler
derived state, npm cache metadata and the named evidence/log/archive directory.
No source, lock, manifest, config, workflow or provider was modified during
checks. This report/checkpoint are subsequent record-only changes.

The earlier bounded local review remains historical evidence for its exact
candidate. Audit and normal install/Wrangler were excluded then; these fresh
checks do not retroactively turn that review into release acceptance. Normal
install/build/dry-run gates now succeeded, audit did not. Native browser,
provider ingestion/autonomy, remote CI and actual rollout remain unexecuted.

Current gate: deployment checks not all green. Next is an explicitly bounded
dependency correction or documented assessment by the appropriate authority;
no dependency correction, push or deployment is authorized by this report.
