import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  getLatest: publicProcedure.query(async ({ ctx }) => {
    const post = await ctx.db.post.findMany();
  }),
});
