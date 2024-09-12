import {prisma} from "@/shared/db/lib";
import {UserCard} from "@/features/user/ui/UserCard";

export default async function UsersPage() {

  const users = await prisma.user.findMany();

  return (
    <div>
      {users.map(({id, name, email, image, age}) => (
        <UserCard key={id} id={id} name={name} email={email} image={image} age={age} />
      ))}
    </div>
  );
}
