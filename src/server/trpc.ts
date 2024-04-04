import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

// Base router and procedure helpers
export const router = t.router;
export const mergeRouters = t.mergeRouters;
export const procedure = t.procedure;
