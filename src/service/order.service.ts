import { AppDataSource } from 'db';
import { Order } from 'entities';
import { Injectable } from '@decorators/di';

@Injectable()
export class OrderService {
  async findById(id: number) {
    return await AppDataSource.getRepository(Order).findOne({
      where: { id },
    });
  }
  async findAll() {
    return await AppDataSource.getRepository(Order).findAndCount();
  }

  async create(order: Partial<Order>) {
    return await AppDataSource.getRepository(Order).save(order);
  }
}
