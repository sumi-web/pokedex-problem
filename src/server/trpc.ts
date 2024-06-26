import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const router = t.router;

export const mergeRouters = t.mergeRouters;

export const procedure = t.procedure;
