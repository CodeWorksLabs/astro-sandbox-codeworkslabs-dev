# Astro Analytics Sandbox Handoff

Updated: 2026-09-14

## Current boundary

- This repository owns `astro.sandbox.codeworkslabs.dev`.
- The qualified consumer integrates Analytics for Astro `0.1.0-alpha.21`
  from product commit `40713fc7f52ac1b3a0e968d995de10640f851934`.
- The exact package is 28,046 bytes with SHA-256
  `0237b5d93c79b4ea90b842f96079e759076c0ea87ea01f97097383998541a9c7`.
- Consumer commit `91f9c9fd8427ea0ab94bec2e367337dd90f6e512`
  is pushed and deployed.

## Live state

- The live Cloudflare Worker version is
  `78d93a62-e8fe-4c2d-b574-7e6b6ff140cd`.
- It deploys the qualified Alpha.21 consumer from commit `91f9c9f`.
- `https://astro.sandbox.codeworkslabs.dev/analytics/` and `/analytics/next/`
  returned HTTP 200 after deployment. The live analytics bundle contains all
  five configured provider integrations.

## Verification state

- A clean local install resolved the exact Alpha.21 package.
- Fresh verification passed: production dependency audit with zero
  vulnerabilities, 8/8 site tests, Astro diagnostics with zero findings,
  a three-page production build, and a 14-asset Wrangler deployment dry run.
- GitHub Actions run `34933965184` passed against the pushed consumer commit.
- All five configured providers remain present in the built output. The
  Alpha.21 event-property correction rejects malformed public-browser property
  bags before provider dispatch. No release or product-risk acceptance occurred.

## Recovery and next action

- The pre-cleanup 17-commit local history is preserved in
  `C:\CodeProjects\Archives\Astro Analytics Recovery\2026-09-14\astro-sandbox-before-cleanup.bundle`.
- Alpha.21 is locally qualified, pushed, and deployed for this consumer.
- Product development does not authorize GitHub, credential, Cloudflare,
  deployment, or release changes.
