import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";
import {getSessionToken} from "@/shared/lib/auth";
import {UpdateProfileForm} from "@/features/update-profile";
import {prisma} from "@/shared/lib/prisma-client";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  const sessionToken = getSessionToken();
  if (!sessionToken) {
    throw new Error('No session token found');
  }

  const {user} = session;
  if (!user) {
    throw new Error('No user found');
  }

  const dbUser = await prisma.user.findUnique({
    where: {
      id: user.id,
    }
  });
  if (!dbUser) {
    throw new Error('User not found in database');
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Update Your Profile</h2>
        <UpdateProfileForm user={dbUser} />
      </div>
    </div>
  );
}
