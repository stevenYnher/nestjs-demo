import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './infrastructure/modules/auth.module';
import { UserModule } from './infrastructure/modules/user.module';
import {InvoicesModule}from 'src/application/modules/factura.module';
// import { RedisModule } from './redis/redis.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { MessageModule } from './redis/message.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://joshue10:07128124@cluster0.vtcx6zh.mongodb.net/ '),
    AuthModule,
    UserModule,
    InvoicesModule
    // RedisModule,
  ],
})
export class AppModule {}

