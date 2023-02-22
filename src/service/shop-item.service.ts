import { AppDataSource } from 'db';
import { ShopItem } from 'entities';
import { Injectable } from '@decorators/di';

@Injectable()
export class ShopItemService {
  async findById(id: number) {
    return await AppDataSource.getRepository(ShopItem).findOne({
      where: { id },
    });
  }
  async findAll() {
    return await AppDataSource.getRepository(ShopItem).findAndCount();
  }

  async create(shopItem: Partial<ShopItem>) {
    return await AppDataSource.getRepository(ShopItem).save(shopItem);
  }
}
