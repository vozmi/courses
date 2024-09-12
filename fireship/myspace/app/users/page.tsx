import {prisma} from "@/shared/db/lib";
import {UserCard} from "@/features/user/ui/UserCard";

export default async function UsersPage() {

  const users = await prisma.user.findMany();

  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
