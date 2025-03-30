import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma, PrismaClient, User } from '@prisma/client';
import { DbRepository } from '../repository.types';
import { UserAlreadyExistsError } from './usersRepository.errors';

@Injectable()
export class UsersRepository implements DbRepository<User> {
  private _prismaClient: PrismaClient;

  constructor(config: ConfigService) {
    const dbUrl = config.get('DATABASE_URL') as string;

    this._prismaClient = new PrismaClient({
      datasources: {
        db: {
          url: dbUrl,
        },
      },
    });
  }

  getAll() {
    return this._prismaClient.user.findMany();
  }

  getById(id: number): Promise<User | null> {
    return this._prismaClient.user.findUnique({
      where: {
        id,
      },
    });
  }

  getByEmail(email: string): Promise<User | null> {
    return this._prismaClient.user.findUnique({
      where: {
        email,
      },
    });
  }

  async create(data: Omit<User, 'id'>): Promise<User> {
    try {
      return await this._prismaClient.user.create({
        data,
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new UserAlreadyExistsError(data.email);
        }
      }
      throw e;
    }
  }

  update(id: number, data: Omit<User, 'id'>): Promise<User> {
    return this._prismaClient.user.update({
      where: {
        id,
      },
      data,
    });
  }

  delete(id: number): Promise<User> {
    return this._prismaClient.user.delete({
      where: {
        id,
      },
    });
  }
}
