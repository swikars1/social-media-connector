"use server";

import { prisma } from "./prisma";

export async function getUserAccessToken() {
  const data = await prisma.account.findFirst({
    where: {
      userId: "cm8oyxvql0000qzvhwuu47m00",
    },
  });

  return data.access_token;
}
