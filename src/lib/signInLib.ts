"use server";

import { signIn } from "@/auth";

export async function signInToTiktok() {
  await signIn("tiktok");
}

export async function signInToInstagram() {
  await signIn("instagram");
}
