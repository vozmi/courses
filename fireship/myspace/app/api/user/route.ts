import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import {getCurrentUser} from "@/entities/user/model/getUserBySession";
import {prisma} from "@/shared/lib/prisma-client";
import {NextResponse} from "next/server";

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  const user = await getCurrentUser();
  if (!user) {
    return NextResponse.json({error: 'Cannot get current user!'}, {status: 500});
  }

  const data = await req.json();
  data.age = Number(data.age);

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data,
  });

  return NextResponse.json(updatedUser);
}
