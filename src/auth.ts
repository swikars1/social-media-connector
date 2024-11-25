import NextAuth from "next-auth";
import TikTok from "next-auth/providers/tiktok";
import { prisma } from "./lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    TikTok({
      clientId: process.env.AUTH_TIKTOK_CLIENT_ID,
      clientSecret: process.env.AUTH_TIKTOK_SECRET,
      authorization: {
        params: {
          scope: [
            "user.info.basic",
            "user.info.profile",
            "video.publish",
            "video.upload",
          ],
        },
      },
    }),
  ],
});
