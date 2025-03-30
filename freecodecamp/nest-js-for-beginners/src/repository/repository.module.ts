import { Global, Module } from '@nestjs/common';
import { UsersRepository } from './users/usersRepository';

@Global()
@Module({
  providers: [UsersRepository],
  exports: [UsersRepository],
})
export class RepositoryModule {}
