export { AllStak, AllStakConfig, Breadcrumb, HttpRequestItem } from '@allstak/core';

/** Capture an Error; no-op if `init()` has not been called. */
declare function captureException(error: Error, context?: Record<string, unknown>): void;
declare function captureMessage(message: string, level?: 'fatal' | 'error' | 'warning' | 'info'): void;
declare function setUser(user: {
    id?: string;
    email?: string;
}): void;
declare function setTag(key: string, value: string): void;

export { captureException, captureMessage, setTag, setUser };
