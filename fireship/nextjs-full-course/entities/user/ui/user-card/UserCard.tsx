import Link from "next/link";
import Image from "next/image";
import styles from "./UserCard.module.scss";
import { User } from "@prisma/client";

export const UserCard = ({ user }: { user: User }) => {
  const { id, name, email, image, age } = user;

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
