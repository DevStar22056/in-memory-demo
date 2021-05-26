import { Module } from '@nestjs/common';
import { FlowerController } from './flower.controller';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  imports: [InMemoryDBModule.forFeature('flower')],
  controllers: [FlowerController],
})
export class FlowerModule {}
