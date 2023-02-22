import {
  Body,
  Controller,
  Get,
  Params,
  Post,
  Response,
} from '@decorators/express';
import { AppDataSource } from 'db';
import { Order } from 'entities';
import { OrderDto } from 'entities/dto';

@Controller('/order')
export class OrderController {
  @Get('/')
  async getCategories(@Response() res: any) {
    return await AppDataSource.getRepository(Order).findAndCount();
  }

  @Get('/:id')
  async getCategory(@Response() res: any, @Params('id') id: string) {
    return await AppDataSource.getRepository(Order).findOne({
      where: { id: +id },
    });
  }

  @Post('/')
  async createCategory(@Response() res: any, @Body() category: OrderDto) {
    return await AppDataSource.getRepository(Order).save(category);
  }
}
