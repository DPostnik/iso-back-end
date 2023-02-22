import {
  Body,
  Controller,
  Get,
  Params,
  Post,
  Response,
} from '@decorators/express';
import { OrderItem } from 'entities';
import { OrderItemService } from 'service';
import { Injectable } from '@decorators/di';

@Injectable()
@Controller('/order-item')
export class OrderItemController {
  constructor(private orderItemService: OrderItemService) {}

  @Get('/')
  async getOrderItems(@Response() res: any) {
    return await this.orderItemService.findAll();
  }

  @Get('/:id')
  async getOrderItem(@Response() res: any, @Params('id') id: string) {
    return await this.orderItemService.findById(+id);
  }

  @Post('/')
  async createOrderItem(
    @Response() res: any,
    @Body() orderItem: Partial<OrderItem>,
  ) {
    return await this.orderItemService.create(orderItem);
  }
}
