import {User} from "@prisma/client";

export type UserFormData = Omit<User, 'id' | 'email' | 'emailVerified'>

export * from './getUserBySession'
