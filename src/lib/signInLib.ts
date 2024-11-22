"use server";

import { signIn } from "@/auth";

export async function signInToTiktok() {
  await signIn("tiktok", {
    scope: [
      "user.info.basic",
      "user.info.profile",
      "video.publish",
      "video.upload",
    ],
  });
}
