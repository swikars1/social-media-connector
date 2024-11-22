"use server";

import { signIn } from "@/auth";

export async function signInToTiktok() {
  await signIn("tiktok");
}
