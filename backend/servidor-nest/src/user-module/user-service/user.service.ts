import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {

    salt: string = "$2b$10$KaKbalAr94e4LIltsN3muea";
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) { }

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async Update(user: User): Promise<User>{
        return this.userRepository.save(user);
    }
    
    async save(newUser : User): Promise<User> | undefined {
       /* 
            bcrypt.hash(newUser.password, 10,(err, hash) => {
                newUser.password = hash;
                return this.userRepository.save(newUser);
            });

        return undefined;
        
       */ 
      
       await this.userRepository.findOne({ where: { username: newUser.username } }).then((user)=>{
        // Si no encuentra el usuario es undefined
        if (user == undefined) {
            // Encriptamos la contraseña
                bcrypt.hash(newUser.password, this.salt, (err, encryptedPass)=>{

                    newUser.password = encryptedPass;
                    newUser.fecha_creacion = new Date();
                    newUser.fecha_ultima_mod = new Date();
                    newUser.avatar = "Default";
                    newUser.grupo = "visitante";
                    newUser.version = "1.0";


                    this.userRepository.save(newUser);
                });

        } else {
            // El usuario ya existe
            return undefined;
        }
       })
       // Ha habido algun error
        return undefined;
        
        
        

        
        
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
