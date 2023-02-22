import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Image } from 'entities/image';

@Entity()
export class ShopItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  title: string;

  @Column()
  count: number;

  @Column()
  volume: number;

  @Column()
  views: number;

  @Column()
  rating: number;

  @ManyToMany(() => Image)
  @JoinTable()
  images: Image[];

  @ManyToMany(() => ShopItem)
  @JoinTable()
  shopItems: ShopItem[];
}
