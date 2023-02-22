import { AppDataSource } from 'db';
import { OrderItem } from 'entities';
import { Injectable } from '@decorators/di';

@Injectable()
export class OrderItemService {
  async findById(id: number) {
    return await AppDataSource.getRepository(OrderItem).findOne({
      where: { id },
    });
  }
  async findAll() {
    return await AppDataSource.getRepository(OrderItem).findAndCount();
  }

  async create(orderItem: Partial<OrderItem>) {
    return await AppDataSource.getRepository(OrderItem).save(orderItem);
  }
}
