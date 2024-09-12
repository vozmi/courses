import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";
import {ProfileEditWidget} from "@/widgets/user/ui";
import {getSessionToken} from "@/shared/auth/model";
import {getUserBySessionToken} from "@/features/user/model/getUserBySession";

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
      <ProfileEditWidget user={user!} />
    </div>
  );
}