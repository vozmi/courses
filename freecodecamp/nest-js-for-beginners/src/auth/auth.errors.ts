export class InvalidCredentialsError extends Error {
  constructor(email: string) {
    super(`Invalid credentials for user with email ${email}`);
  }
}
