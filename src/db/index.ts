import { DataSource } from 'typeorm';
import { Category, ShopItem } from 'entities';
import { Order } from 'entities/order';
import { OrderItem } from 'entities/order-item';
import { Image } from 'entities/image';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'iso_cosmetics',
  synchronize: true,
  logging: true,
  entities: [Image, Category, ShopItem, Order, OrderItem],
  subscribers: [],
  migrations: [],
});
