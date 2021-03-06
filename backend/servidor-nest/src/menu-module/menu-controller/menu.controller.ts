import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MenuService } from '../menu-service/menu.service';
import { Menu } from '../menu.entity';

@Controller('menu')
export class MenuController {

    constructor(private readonly menuService : MenuService){}


    @Get()
    findAll():Promise<Menu[]>{
        return this.menuService.findAll();
    }

    @Post()
    create(@Body() menu : Menu):Promise<Menu>{
        return this.menuService.save(menu);
    }

    @Get(':id')
    findById(@Param() id : number):Promise<Menu>{
        return this.menuService.findById(id);
    }

    @Put(':id')
    async modifyById(@Param()id:number,@Body()menu : Menu):Promise<Menu>{
        let menuEncontrado=await this.menuService.findById(id);
        menuEncontrado=menu;
        return this.menuService.save(menuEncontrado);
    }

    @Delete(":id")
    async borrarPorId(@Param()id :number):Promise<Menu>{
        return this.menuService.delete(id);
    }






}
