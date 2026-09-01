# Integration Fixtures

Keep only reusable inputs shared by multiple mapped tests. Prefer inline setup for one-off data.

Good candidates:

- Deterministic wallet import material for isolated test profiles.
- Small mock CKB RPC responses used by service-level tests.
- Stable transaction JSON files for offline-signing and multisig reviews.

Do not store private production keys, live user profiles, large chain databases, Playwright traces, screenshots, or one-off run artifacts here.
