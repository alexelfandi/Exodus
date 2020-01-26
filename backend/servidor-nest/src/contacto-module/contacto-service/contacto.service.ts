import { Injectable } from '@nestjs/common';
import { Contacto } from '../contacto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MailerService } from '@nest-modules/mailer';

@Injectable()
export class ContactoService {

    constructor(@InjectRepository(Contacto) private readonly contactoRepository : Repository<Contacto>, private readonly mailerService: MailerService){}

    findAll(): Promise<Contacto[]> {
        return this.contactoRepository.find();
    }
    save(newContacto : Contacto): Promise<Contacto> {
            console.log("Mandando email");
            
            this
              .mailerService
              .sendMail({
                to: newContacto.email, // list of receivers
                from: 'alexelfandi60@gmail.com', // sender address
                subject: 'Exodus Contacto', // Subject line
                text: 'Gracias por contactar con nosotros, en breves recibiras un email de nuestros agentes.', // plaintext body
                html: '<b>Exodus</b>', // HTML body content
              })
              .then(() => {})
              .catch(() => {});

        return this.contactoRepository.save(newContacto);
    }

    async findById(id: number): Promise<Contacto> {
        return this.contactoRepository.findOne(id);
    }

    async delete(id: number): Promise<Contacto> {
        const promesaObjeto = await this.contactoRepository.findOne(id);
        return this.contactoRepository.remove(promesaObjeto);
    }



}
