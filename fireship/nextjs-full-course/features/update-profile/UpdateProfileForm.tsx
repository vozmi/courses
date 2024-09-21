'use client';

import {User} from "@prisma/client";
import {UserFormData} from "@/entities/user/model";
import {UserForm} from "@/entities/user/ui/user-form";

export function UpdateProfileForm({user}: { user: User }) {
  const updateUser = async (userData: UserFormData) => {
    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    await res.json();
  };

  return (
    <UserForm user={user} onSubmit={updateUser} />
  );
}
