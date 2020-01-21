import { Test, TestingModule } from '@nestjs/testing';
import { PublicacionController } from './publicacion.controller';

describe('Publicacion Controller', () => {
  let controller: PublicacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublicacionController],
    }).compile();

    controller = module.get<PublicacionController>(PublicacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
