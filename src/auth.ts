import NextAuth from "next-auth";
import TikTok from "next-auth/providers/tiktok";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    TikTok({
      authorization: {
        params: {
          client_key: process.env.AUTH_TIKTOK_CLIENT_ID,
          scope: "user.info.profile,video.publish,video.upload",
        },
      },
    }),
  ],
});
