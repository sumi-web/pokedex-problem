// import prisma from "~/config/Prisma";
import z from 'zod';

import { router, procedure } from '../trpc';

export const messageRouter = router({
  getHello: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});
