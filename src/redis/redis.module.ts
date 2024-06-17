import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MessageModule } from './message.module';
import { MessageSchema } from './message.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }]),
    MessageModule,
  ],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
