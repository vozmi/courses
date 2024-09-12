import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import {getSessionToken} from "@/shared/auth/model";
import {getUserBySessionToken} from "@/features/user/model/getUserBySession";
import {prisma} from "@/shared/db/lib";
import {NextResponse} from "next/server";

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  const sessionToken = getSessionToken();
  if (!sessionToken) {
    throw new Error('No session token found');
  }

  const data = await req.json();
  data.age = Number(data.age);

  const user = await getUserBySessionToken(sessionToken);
  if (!user) {
    throw new Error('No user found');
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data,
  });

  return NextResponse.json(updatedUser);
}
