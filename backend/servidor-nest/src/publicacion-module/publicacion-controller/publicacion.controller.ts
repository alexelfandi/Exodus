import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Publicacion } from '../publicacion.entity';
import { PublicacionService } from '../publicacion-service/publicacion.service';

@Controller('publicacion')
export class PublicacionController {

    constructor(private readonly myService : PublicacionService){}

    @Get('publicacion')
    getDatos(): Promise <Publicacion[]> {
        return this.myService.BuscalosTodos();
    }
    @Post()
    async create(@Body() dato: Publicacion) {
        return this.myService.Crear(dato);
    }
    @Put(':id')
    async update(@Param('id') id: number, @Body() publicacion: Publicacion) {
      await this.myService.BuscarporId(id);
      publicacion.id = id;
      return this.myService.Crear(publicacion);
    }
    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.myService.Eliminar(id);
    }
}
