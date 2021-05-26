import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { FlowerEntity } from './entities/flower.entity';

@Controller('flower')
export class FlowerController {
  constructor(private flowerService: InMemoryDBService<FlowerEntity>) {}

  @Get()
  GetFlower(@Query('query') query: string) {
    if (query)
      return this.flowerService.query(
        (data) =>
          data != undefined &&
          ((data.name != undefined && data.name.includes(query)) ||
            (data.type != undefined && data.type.includes(query)) ||
            (data.color != undefined && data.color.includes(query)) ||
            (data.description != undefined &&
              data.description.includes(query))),
      );
    else return this.flowerService.getAll();
  }

  @Post('create')
  createFlower(@Body() flowerData: FlowerEntity) {
    return this.flowerService.create(flowerData);
  }

  @Put(':id/update')
  async update(
    @Param('id') id,
    @Body() flowerData: FlowerEntity,
  ): Promise<any> {
    flowerData.id = id;
    const oldData = this.flowerService.get(id);
    const data = { ...oldData, ...flowerData };
    return this.flowerService.update(data);
  }

  @Delete(':id/delete')
  async delete(@Param('id') id): Promise<any> {
    return this.flowerService.delete(id);
  }
}
