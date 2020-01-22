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
        return this.userRepository.findOne(id);
    }
    findByUsername(username: string): Promise<User> {
        return this.userRepository.find({where:{username: username}})[0];
    }

    async delete(id: number): Promise<User> {
        const promesaObjeto = await this.userRepository.findOne(id);
        return this.userRepository.remove(promesaObjeto);
    }
}
