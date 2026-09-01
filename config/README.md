# Integration Config

Keep stable configuration templates for reviewer-mapped integration tests here.

The current Neuron harness reuses repository-native configuration:

- `playwright.config.ts` starts the UI server and drives Electron through `e2e/fixtures/electron.ts`.
- `packages/neuron-wallet/jest.config.js` runs wallet/main-process tests.
- `packages/neuron-ui/package.json` runs Vitest UI tests.
- `packages/neuron-wallet/.env` pins script and network constants used by the wallet process.

Add config here only when multiple mapped tests share the same environment contract, for example a deterministic devnet profile, a mock RPC endpoint list, or a hardware-wallet manual lane descriptor.
