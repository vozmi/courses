/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/repository/users/usersRepository';
import * as bcrypt from 'bcrypt';
import { InvalidCredentialsError } from './auth.errors';

@Injectable()
export class AuthService {
  /**
   * The number of rounds used in the bcrypt hash function.
   * A higher number makes the hash more resistant to brute-force attacks, but also increases the computational cost.
   */
  private readonly saltRounds = 10;

  constructor(private readonly usersRepository: UsersRepository) {}

  async signIn({ email, password }: { email: string; password: string }) {
    const user = await this.usersRepository.getByEmail(email);

    if (!user) {
      throw new InvalidCredentialsError(email);
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.hash);

    if (!isPasswordCorrect) {
      throw new InvalidCredentialsError(email);
    }

    return user;
  }

  async signUp({
    email,
    password,
    name,
  }: {
    email: string;
    password: string;
    name?: string;
  }) {
    const hash = await bcrypt.hash(password, this.saltRounds);
    return this.usersRepository.create({
      email,
      hash,
      name: name ?? null,
    });
  }
}
