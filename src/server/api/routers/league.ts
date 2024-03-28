/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const leagueRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.league.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),
});
