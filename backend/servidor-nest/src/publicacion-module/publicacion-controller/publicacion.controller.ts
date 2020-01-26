import { Controller, Get, Post, Body, Put, Param, Delete, UseGuards } from '@nestjs/common';
import { Publicacion } from '../publicacion.entity';
import { PublicacionService } from '../publicacion-service/publicacion.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('publicacion')
export class PublicacionController {

    constructor(private readonly myService : PublicacionService){}

    @Get('publicos')
    getDatosPublicos(): Promise <Publicacion[]> {
        return this.myService.BuscalosTodosPublicos();
    }
    
    // @UseGuards(AuthGuard('local'))
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
