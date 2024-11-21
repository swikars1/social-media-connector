"use server";

import { signIn } from "@/auth";

export async function signInToTiktok() {
  await signIn("tiktok", {
    scopes: ["user.info.basic", "video.publish", "video.upload"],
  });
}
