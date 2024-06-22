import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageController } from './message.controller';
import { MessageSchema } from './message.schema';
import { RedisService } from './redis.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }]),
  ],
  controllers: [MessageController],
  providers: [RedisService],
})
export class MessageModule {}
