import { Injectable, Inject } from '@nestjs/common';
import { UserRepository } from 'src/core/user/user.repository';
import { User } from 'src/core/user/user.model';
// import { RedisService } from 'src/redis/redis.service';
import * as bcrypt from 'bcrypt';
// import { Message } from 'src/redis/message.schema';

@Injectable()
export class UserService {
  constructor( @Inject('UserRepository') private readonly userRepository: UserRepository
  // , private readonly redisService: RedisService
) {}

  async register(username: string, password: string): Promise<User> {
    console.log(password);
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User(null, username, hashedPassword);
    const createdUser = await this.userRepository.save(user);

    // await this.redisService.set(`user:${username}`, JSON.stringify(createdUser));
    
    // const message = new Message();
    // message.key=createdUser.id;
    // message.content = `Usuario ${createdUser.username} registrado`;
    // await this.redisService.saveMessageToMongo(message);

    return createdUser;
  }

  async findUserByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findByUsername(username);
  }
}