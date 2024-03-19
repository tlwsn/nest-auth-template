import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  username: string;
  password: string;
};

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1,
      username: 'tlwsn',
      password: 'test',
    },
    {
      id: 2,
      username: 'test',
      password: 'tlwsn',
    },
  ];

  async findByUsername(username: string): Promise<User> {
    return this.users.find((e) => e.username == username);
  }
}
