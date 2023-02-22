import {
  Body,
  Controller,
  Get,
  Params,
  Post,
  Response,
} from '@decorators/express';
import { Order } from 'entities';
import { Injectable } from '@decorators/di';
import { OrderService } from 'service';

@Injectable()
@Controller('/order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get('/')
  async getOrders(@Response() res: any) {
    return await this.orderService.findAll();
  }

  @Get('/:id')
  async getOrder(@Response() res: any, @Params('id') id: string) {
    return await this.orderService.findById(+id);
  }

  @Post('/')
  async createOrder(@Response() res: any, @Body() order: Partial<Order>) {
    return await this.orderService.create(order);
  }
}
