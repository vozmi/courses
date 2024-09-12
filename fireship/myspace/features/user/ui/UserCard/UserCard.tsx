import React from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "./UserCard.module.scss";

type Props = {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  age?: number | null;
}

export const UserCard: React.FC<Props> = ({id, name, email, image, age}) => {
  return (
    <div>
      {image && <Image className={styles.card__image} src={image} alt={name ?? 'User Image'} width={160} height={120} />}
      <div>
        <Link href={`/users/${id}`}>
          {name}
        </Link>
        {age && <p>Age: {age}</p>}
        {email && <p>Email: {email}</p>}
      </div>
    </div>
  );
};
