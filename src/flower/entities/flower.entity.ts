import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface FlowerEntity extends InMemoryDBEntity {
  name: string;
  type: string;
  color: string;
  description: string;
}
