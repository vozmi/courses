import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {redirect} from "next/navigation";
import {prisma} from "@/shared/db/lib";
import {ProfileEditWidget} from "@/widgets/user/ui";
import {cookies} from "next/headers";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  const allCookies = cookies();
  const sessionToken = allCookies.get('next-auth.session-token')?.value;

  const user = await prisma.user.findFirst({
    include: {
      sessions: true,
    },
    where: {
      sessions: {
        some: {
          sessionToken,
        }
      }
    }
  });

  return (
    <div>
      <h1>Dashboard</h1>
      <ProfileEditWidget user={user!} />
    </div>
  );
}
