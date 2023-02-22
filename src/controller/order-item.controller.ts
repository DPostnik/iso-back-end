import {
  Body,
  Controller,
  Get,
  Params,
  Post,
  Response,
} from '@decorators/express';
import { AppDataSource } from 'db';
import { OrderItem } from 'entities';
import { OrderItemDto } from 'entities/dto';

@Controller('/order-item')
export class OrderItemController {
  @Get('/')
  async getCategories(@Response() res: any) {
    return await AppDataSource.getRepository(OrderItem).findAndCount();
  }

  @Get('/:id')
  async getCategory(@Response() res: any, @Params('id') id: string) {
    return await AppDataSource.getRepository(OrderItem).findOne({
      where: { id: +id },
    });
  }

  @Post('/')
  async createCategory(@Response() res: any, @Body() orderItem: OrderItemDto) {
    return await AppDataSource.getRepository(OrderItem).save(orderItem);
  }
}
