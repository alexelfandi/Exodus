import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    save(newUser : User): Promise<User> {
        return this.userRepository.save(newUser);
    }

    async findById(id: number): Promise<User> {
        return await this.userRepository.findOne(id);
    }
    async findByUsername(usernameD: string): Promise<User> {
        return await this.userRepository.findOne({where:{username: usernameD}});
    }

    async delete(id: number): Promise<User> {
        const promesaObjeto = await this.userRepository.findOne(id);
        return this.userRepository.remove(promesaObjeto);
    }
}
