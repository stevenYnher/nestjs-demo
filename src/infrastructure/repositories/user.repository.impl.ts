import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRepository } from 'src/core/user/user.repository';
import { User } from 'src/core/user/user.model';
import { UserEntity, UserDocument } from './schemas/user.schema';

@Injectable()
export class MongoUserRepository implements UserRepository {
  constructor(@InjectModel(UserEntity.name) private userModel: Model<UserDocument>) {}

  async save(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    const savedUser = await newUser.save();
    return new User(savedUser.id, savedUser.username, savedUser.password);
  }

  async findByUsername(username: string): Promise<User | undefined> {
    const userDoc = await this.userModel.findOne({ username }).exec();
    if (userDoc) {
      return new User(userDoc.id, userDoc.username, userDoc.password);
    }
    return undefined;
  }
}