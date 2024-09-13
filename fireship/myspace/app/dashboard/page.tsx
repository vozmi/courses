import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";
import {getSessionToken} from "@/shared/lib/auth";
import {getUserBySessionToken} from "@/entities/user/model";
import {UpdateProfileForm} from "@/features/update-profile";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  const sessionToken = getSessionToken();
  if (!sessionToken) {
    throw new Error('No session token found');
  }

  const user = await getUserBySessionToken(sessionToken);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <h2>Update Your Profile</h2>
        <UpdateProfileForm user={user!} />
      </div>
    </div>
  );
}
