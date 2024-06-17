import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserEntity, UserSchema } from '../repositories/schemas/user.schema';
import { MongoUserRepository } from '../repositories/user.repository.impl';
import { UserService } from 'src/application/services/user.service';
import { RedisService } from 'src/redis/redis.service';
import { MessageSchema } from 'src/redis/message.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }])],
  providers: [
    { provide: 'UserRepository', useClass: MongoUserRepository },
    UserService,
    RedisService
  ],
  exports: [UserService,RedisService],
})
export class UserModule {}
