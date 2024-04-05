import { mergeRouters } from './trpc';
import { messageRouter } from './routers/hello';
import { pokemonRouter } from './routers/pokemon';

export const appRouter = mergeRouters(messageRouter,pokemonRouter);

export type AppRouter = typeof appRouter;
