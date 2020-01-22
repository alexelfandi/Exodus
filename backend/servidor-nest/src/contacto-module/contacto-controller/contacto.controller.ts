import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ContactoService } from '../contacto-service/contacto.service';
import { Contacto } from '../contacto.entity';

@Controller('contacto')
export class ContactoController {
    constructor(private readonly contactoService : ContactoService){}


    @Get()
    findAll():Promise<Contacto[]>{
        return this.contactoService.findAll();
    }

    @Post()
    create(@Body() contacto : Contacto):Promise<Contacto>{
        return this.contactoService.save(contacto);
    }

    @Get(':id')
    findById(@Param() id : number):Promise<Contacto>{
        return this.contactoService.findById(id);
    }

    @Put(':id')
    async modifyById(@Param()id:number,@Body()contacto : Contacto):Promise<Contacto>{
        let contactoEncontrado=await this.contactoService.findById(id);
        contactoEncontrado=contacto;
        return this.contactoService.save(contactoEncontrado);
    }

    @Delete(":id")
    async borrarPorId(@Param()id :number):Promise<Contacto>{
        return this.contactoService.delete(id);
    }

}
