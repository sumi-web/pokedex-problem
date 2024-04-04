import { z } from "zod";
import { mergeRouters } from "./trpc";
import { messageRouter } from "./route/hello";

export const appRouter = mergeRouters(messageRouter);

export type AppRouter = typeof appRouter;
