import NextAuth from "next-auth";
import TikTok from "next-auth/providers/tiktok";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    TikTok({
      authorization: {
        params: {
          scope: "user.info.profile video.publish video.upload",
        },
      },
    }),
  ],
});
