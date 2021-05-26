import { Test, TestingModule } from '@nestjs/testing';
import { FlowerController } from './flower.controller';

describe('FlowerController', () => {
  let controller: FlowerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlowerController],
    }).compile();

    controller = module.get<FlowerController>(FlowerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
