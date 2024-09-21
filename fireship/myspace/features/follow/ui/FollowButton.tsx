"use client";
import React, {useTransition} from 'react';
import {User} from "@prisma/client";
import {follow, unfollow} from "../model";
import {useSession} from "next-auth/react";

type Props = {
  userId: User['id'];
  isFollowing?: boolean;
};

export function FollowButton({userId, isFollowing}: Props) {
  const [isPending, startTransition] = useTransition();

  const {data: session} = useSession();
  if (!session) return null;

  const {user: currentUser} = session;
  if (!currentUser) return null;

  const startFollowing = () => startTransition(() => follow(currentUser.id, userId));
  const startUnfollowing = () => startTransition(() => unfollow(currentUser.id, userId));

  return (
    isFollowing ? <button onClick={startUnfollowing} disabled={isPending}>Unfollow</button> :
      <button onClick={startFollowing} disabled={isPending}>Follow</button>
  );
}
