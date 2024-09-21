import {prisma} from "@/shared/lib/prisma-client";
import {UserCard} from "@/entities/user/ui/user-card";

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
