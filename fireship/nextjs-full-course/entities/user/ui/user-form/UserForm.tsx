import React from "react";
import {UserFormData} from "@/entities/user/model";
import styles from "./UserForm.module.scss";

type Props = {
  user?: UserFormData
  onSubmit: (user: UserFormData) => void
}

/**
 * UserForm
 * @param user
 * @param onSubmit
 * @constructor
 */
export const UserForm: React.FC<Props> = ({user, onSubmit}: Props) => {

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body: UserFormData = {
      name: formData.get('name') as string,
      bio: formData.get('bio') as string,
      age: Number(formData.get('age')),
      image: formData.get('image') as string,
    };

    onSubmit(body);
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" defaultValue={user?.name ?? ''}/>

      <label htmlFor="bio">Bio</label>
      <textarea
        name="bio"
        rows={5}
        defaultValue={user?.bio ?? ''}
      ></textarea>

      <label htmlFor="age">Age</label>
      <input type="text" name="age" defaultValue={user?.age ?? undefined}/>

      <label htmlFor="image">Profile Image URL</label>
      <input type="text" name="image" defaultValue={user?.image ?? ''}/>

      <button type="submit">Save</button>
    </form>
  );
}
