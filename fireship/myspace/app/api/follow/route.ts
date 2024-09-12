import {getCurrentUser} from "@/features/user/model/getUserBySession";
import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/shared/db/lib";

export async function POST(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({error: 'Cannot get current user!'}, {status: 500});
  }

  const { targetUserId } = await req.json();
  const record = await prisma.follows.create({
    data: {
      followerId: user.id,
      followingId: targetUserId,
    },
  });

  return NextResponse.json(record);
}

export async function DELETE(req: NextRequest) {
  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({error: 'Cannot get current user!'}, {status: 500});
  }

  const targetUserId = req.nextUrl.searchParams.get('targetUserId');
  if (!targetUserId) {
    return NextResponse.json({error: 'Query param targetUserId is required!'}, {status: 400});
  }

  const record = await prisma.follows.delete({
    where: {
      followerId_followingId: {
        followerId: user.id,
        followingId: targetUserId,
      },
    },
  });

  return NextResponse.json(record);
}
