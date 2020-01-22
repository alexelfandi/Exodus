import { Injectable } from '@nestjs/common';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ){}

    FindAll(): Promise<User[]>{
        return this.userRepository.find()
    }
    findOne(username: string){

        return new User();
    }
}
