import { User } from './user.model';

export interface UserRepository {
  save(user: User): Promise<User>;
  findByUsername(username: string): Promise<User | undefined>;
}