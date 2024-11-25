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
      token: {
        request: async (context) => {
          console.log({ context });
          // Custom token request implementation
          const tokens = await fetch(
            "https://open.tiktokapis.com/v2/oauth/token",
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
              method: "POST",
              body: new URLSearchParams({
                client_key: process.env.AUTH_TIKTOK_CLIENT_ID!,
                client_secret: process.env.AUTH_TIKTOK_SECRET!,
                code: context.params.code,
                grant_type: "authorization_code",
                redirect_uri: context.provider.callbackUrl,
              }),
            }
          ).then((res) => res.json());

          return {
            tokens,
          };
        },
      },
    }),
  ],
});
