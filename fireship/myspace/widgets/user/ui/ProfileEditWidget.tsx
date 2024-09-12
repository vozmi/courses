'use client';

import {User} from "@prisma/client";
import {ProfileForm} from "@/features/user/ui/ProfileForm";
import {UserFormData} from "@/features/user/model";

export function ProfileEditWidget({user}: { user: User }) {
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
    <div>
      <h2>Edit Your Profile</h2>
      <ProfileForm user={user} onSubmit={updateUser} />
    </div>
  );
}
