# @allstak/browser

Browser-side AllStak SDK. Thin wrapper around `allstak-js` with the right defaults for SPAs.

```ts
import { AllStak } from '@allstak/browser';

AllStak.init({
  dsn: 'http://ASK_KEY@localhost:8080',
  environment: 'production',
  release: 'v1.4.2',
});
```

## What is captured automatically (verified against the live AllStak backend)

| Capability | Auto vs Manual | Notes |
| ---------- | -------------- | ----- |
| `window.onerror` (uncaught) | **Auto** | hooked at `init()` |
| `unhandledrejection` (promises) | **Auto** | hooked at `init()` |
| Outbound `fetch()` — recorded as **breadcrumbs** AND as `/ingest/v1/http-requests` rows | **Auto** | own-ingest URLs are excluded |
| `console.warn` / `console.error` → breadcrumbs | **Auto** | |
| Navigation breadcrumbs (route changes) | **Auto** | |
| `captureMessage(message, level)` → routes to **logs** for `info`/`warning`; to **logs + errors** for `error`/`fatal`. Override with `{ as: 'log' \| 'error' \| 'both' }`. | API | fixes a previous bug where `captureMessage` only landed in `errors` and nothing showed up in the dashboard's Logs view |
| `setUser({ id, email })` | API | attached to every subsequent event |
| `setTag(key, value)` | API | |

## What is NOT captured automatically

| | Why |
| - | --- |
| `XMLHttpRequest` requests | Only `fetch()` is patched. SPAs that still use `XMLHttpRequest` (legacy libraries, some date pickers, etc.) won't appear under Requests. |
| Click breadcrumbs | Not implemented today. PRs welcome. |
| Form submission breadcrumbs | Not implemented today. |
| React component errors | See `@allstak/react` and wrap your tree in `<AllStakErrorBoundary>`. |

## Companion packages

- [`@allstak/react`](../allstak-react) — error boundary + hooks for React apps.
- [`allstak-js`](../allstak-js) — Node-side counterpart (server SDK).

## License

MIT
