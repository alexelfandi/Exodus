import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Publicacion } from '../publicacion.entity';
import { PublicacionService } from '../publicacion-service/publicacion.service';

@Controller('publicacion')
export class PublicacionController {

    constructor(private readonly myService : PublicacionService){}

    @Get()
    getDatos(): Promise <Publicacion[]> {
        return this.myService.BuscalosTodos();
    }
    @Get(':id')
    getPorId(@Param('id') id:number): Promise <Publicacion> {
        return this.myService.BuscarporId(id);
    }
    @Post()
    async create(@Body() dato: Publicacion):Promise<Publicacion> {
        return this.myService.save(dato);
    }
    @Put()
    async update( @Body() publicacion: Publicacion): Promise<Publicacion> {
      let publicacionnueva = await this.myService.BuscarporId(publicacion.id);
      publicacionnueva = publicacion;
      return this.myService.save(publicacionnueva);
    }
    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.myService.Eliminar(id);
    }
}
