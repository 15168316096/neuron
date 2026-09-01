# Neuron Test Project Instructions

This is the canonical instruction source for the Neuron reviewer-first test workflow.

## Target

- Source repository: `https://github.com/nervosnetwork/neuron`
- Local checkout: this repository root.
- Default revision for this initialization: `codex/remove-chinese-regression-plan@5f058a308e3f56270fe7f69e937261a7e465b6ef`
- Product shape: Electron desktop wallet with a React renderer in `packages/neuron-ui` and the wallet/main process in `packages/neuron-wallet`.
- Stable entry points: root package scripts, `playwright.config.ts`, `e2e/fixtures/electron.ts`, Electron IPC channels in `packages/neuron-ui/src/services/remote`, controllers in `packages/neuron-wallet/src/controllers`, services in `packages/neuron-wallet/src/services`, and persistence under `packages/neuron-wallet/src/database`.
- Stable setup command: `yarn`
- Focused native commands: `yarn test:e2e`, `cd packages/neuron-wallet && yarn test --runTestsByPath <path>`, and `cd packages/neuron-ui && yarn test <path>`
- Full native commands: `yarn test`, `yarn test:ci`, and `yarn test:e2e`
- Mapping command: `python3 scripts/check_test_map.py` or `yarn test:map`

A single Integration approach uses root `reviews/`, root `config/`, root `fixtures/`, root `tests/`, and the existing package test directories. Package-owned tests remain in their native locations; the mapping checker derives coverage from review documents and nearby `TEST-MAP: <CASE-ID>` comments.

Initialized approach: `integration`.

- Root review and execution scope: Integration — service lifecycle, cross-component flows, external interfaces, persistence boundaries, and end-to-end wallet outcomes.

## Workflow

Work on one area, interface, or review document and one gate at a time. Do not automatically advance to the next area.

1. Maintain the area boundary in `reviews/README.md`.
2. Write or materially revise one reviewer-facing case table.
3. Present the complete changed row set and stop before changing automated tests.
4. Wait for explicit confirmation.
5. Implement only confirmed cases with direct, readable tests and nearby `TEST-MAP: <CASE-ID>` comments.
6. Run the focused native command and `python3 scripts/check_test_map.py`. Run a broader suite only when the changed scope justifies it.

Split larger scopes coherently instead of omitting behavior. Group related fields proved by the same operation and oracle.

## Review Rows

```markdown
| 用例 | 场景 | 预期结果 | 防止的问题 | 优先级 |
| --- | --- | --- | --- | --- |
| `RPC-01` | [scenario] | [observable result] | [problem prevented] | P0 |
```

- Use globally unique stable IDs and plain product language. Suggested prefixes: `APP`, `WAL`, `NET`, `TX`, `DAO`, `ASSET`, `MSIG`, `HW`, `DATA`, and `UI`.
- Preserve an ID when editing the same behavior.
- Use `待确认：<decision>` for ambiguity.
- Do not add approval, coverage, automation status, paths, implementation plans, or run history to the table.

## Feedback And Mapping

Read the nearest `reviews/review-feedback.md` before revising cases. On corrective feedback, append:

```text
- model: <model-id-or-unavailable> | cases: <case IDs or review scope> | feedback: <human feedback verbatim>
```

Preserve the wording, collapse line breaks, escape `|` as `\|`, and do not record approval without a correction. This is learning feedback, not a case status or approval ledger.

Map each automated case with one nearby `TEST-MAP: <CASE-ID>` comment. Coverage is computed from code; do not maintain a mapping ledger.

Existing Neuron unit, integration, and E2E tests may be mapped in place. New cross-component Playwright coverage belongs under `e2e/specs/` unless a lower-level Jest/Vitest test proves the same observable behavior more directly.

## Efficiency And Handoff

- Read targeted source ranges and affected files; avoid repository dumps and repeated unchanged reads.
- Prefer one focused deterministic run. Bound live-network retries and report repeated unavailability as residual risk.
- Group automation explanations by shared reason and oracle; expand only changed, failed, ambiguous, or high-risk cases.
- Report changed IDs, coverage, literal verification result/exit status, residual risk, and the exact next gate. Do not repeat unchanged tables.

Keep stable commands current in the relevant README. Do not create per-PR reports, run archives, approval histories, or status ledgers.
