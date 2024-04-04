// import prisma from "~/config/Prisma";
import z from 'zod';

import { router, procedure } from '../trpc';

export const messageRouter = router({
  getHello: procedure
    .query(() => {
      return {
        greeting: `Welcome to Pokedex`,
      };
    }),
});