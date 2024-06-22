import { Injectable } from '@nestjs/common';
import { createClient, RedisClientType } from 'redis';
import { Message } from './message.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MessageDocument } from './message.schema';

@Injectable()
export class RedisService {
  private client: RedisClientType;

  constructor(
    @InjectModel('Message') private readonly messageModel: Model<MessageDocument>,
  ) {
    this.client = createClient({
      url: 'redis://redis:6379',
    });

    this.client.on('error', (err) => console.error('Redis Client Error', err));

    this.client.connect();
  }

  async set(key: string, value: string): Promise<void> {
    await this.client.set(key, value);
  }

  async get(key: string): Promise<string | null> {
    return await this.client.get(key);
  }

  async saveMessageToMongo(message: Message): Promise<Message> {
    const newMessage = new this.messageModel(message);
    return await newMessage.save();
  }
}
