import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menu } from '../menu.entity';


@Injectable()
export class MenuService {

    constructor(@InjectRepository(Menu) private readonly menuRepository : Repository<Menu>){}

    findAll(): Promise<Menu[]> {
        return this.menuRepository.find();
    }
    save(newMenu : Menu): Promise<Menu> {
        return this.menuRepository.save(newMenu);
    }

    async findById(id: number): Promise<Menu> {
        return this.menuRepository.findOne(id);
    }

    async delete(id: number): Promise<Menu> {
        const promesaObjeto = await this.menuRepository.findOne(id);
        return this.menuRepository.remove(promesaObjeto);
    }


}
