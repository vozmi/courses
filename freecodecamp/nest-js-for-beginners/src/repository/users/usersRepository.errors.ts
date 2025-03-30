export class UserNotFoundError extends Error {
  constructor(email: string) {
    super(`User with email ${email} not found`);
  }
}

export class UserAlreadyExistsError extends Error {
  constructor(email: string) {
    super(`User with email ${email} already exists`);
  }
}
