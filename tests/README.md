# Integration Tests

This directory is reserved for new framework-level integration helpers or tests that do not naturally belong to an existing package.

Prefer existing native locations when they are closer to the behavior:

- Electron end-to-end flows: `e2e/specs/`
- Wallet/main-process unit or integration tests: `packages/neuron-wallet/tests/`
- UI utility and component-level tests: `packages/neuron-ui/src/tests/`

Map automated behavior with a nearby `TEST-MAP: <CASE-ID>` comment in the test file. Coverage is computed by `python3 scripts/check_test_map.py`; do not maintain a manual coverage ledger.
