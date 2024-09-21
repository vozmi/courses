import Image from "next/image";
import {prisma} from "@/shared/lib/prisma-client";
import {FollowButton} from "@/features/follow";
import {isFollowing} from "@/entities/user/model/isFollowing";
import {getUserFromServerSession} from "@/shared/lib/auth/getUserFromServerSession";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({params: {id}}: Props) {
  const user = await prisma.user.findUnique({where: { id }});
  return { title: `User profile of ${user?.name}` };
}

export default async function UserPage({params: {id}}: Props) {
  const user = await prisma.user.findUnique({
    where: {
      id
    }
  });

  if (!user) {
    return <div>User not found</div>;
  }

  const sessionUser = await getUserFromServerSession()
  const follows = sessionUser ? await isFollowing(sessionUser.id, user.id) : null;

  const {name, email, image, age} = user;

  return (
    <div>
      <h1>{name}</h1>
      {email && <p>Email: {email}</p>}
      {age && <p>Age: {age}</p>}
      {image && <Image src={image} alt={name ?? 'User Image'} width={300} height={225} style={{objectFit: 'cover'}} />}

      {typeof follows === 'boolean' && <FollowButton userId={user.id} isFollowing={follows} />}
    </div>
  );
}
