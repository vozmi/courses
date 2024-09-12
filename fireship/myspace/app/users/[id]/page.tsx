import React from 'react';
import Image from "next/image";
import {prisma} from "@/shared/db/lib";

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

  const {name, email, image, age} = user;

  return (
    <div>
      <h1>{name}</h1>
      {email && <p>Email: {email}</p>}
      {age && <p>Age: {age}</p>}
      {image && <Image src={image} alt={name ?? 'User Image'} width={300} height={225} style={{objectFit: 'cover'}} />}
    </div>
  );
}
