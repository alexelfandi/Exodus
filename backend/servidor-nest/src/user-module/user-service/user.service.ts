import { Injectable } from '@nestjs/common';
import { User } from '../user.entity';

@Injectable()
export class UserService {



    FindAll(){

    }
    findOne(username: string){

        return new User();
    }
}
