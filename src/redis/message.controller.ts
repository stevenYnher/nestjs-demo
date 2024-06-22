import { Controller, Post, Body } from '@nestjs/common';
import { RedisService } from './redis.service';
import { Message } from './message.interface';

@Controller('message')
export class MessageController {
  constructor(private readonly redisService: RedisService) {}

  @Post()
  async receiveMessage(@Body() message: Message) {
    // Guardar el mensaje en Redis
    await this.redisService.set(message.key, JSON.stringify(message));
    
    // Guardar el mensaje en MongoDB
    await this.redisService.saveMessageToMongo(message);

    return { success: true };
  }
}
