"use server";
import {prisma} from "@/shared/lib/prisma-client";
import {revalidatePath} from "next/cache";

export async function follow (followerId: string, followingId: string) {
  await prisma.follows.create({
    data: {
      followerId,
      followingId,
    },
  });

  revalidatePath('/users/[id]');
}
