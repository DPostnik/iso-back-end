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

  @Column({
    nullable: false,
    default: 0,
  })
  price: number;

  @Column({
    unique: true,
    nullable: false,
  })
  title: string;

  @Column({
    nullable: false,
    default: 0,
  })
  count: number;

  @Column({
    nullable: false,
    default: 0,
  })
  volume: number;

  @Column({
    nullable: false,
    default: 0,
  })
  views: number;

  @Column({
    nullable: false,
    default: 0,
  })
  rating: number;

  @Column({
    nullable: false,
    default: true,
  })
  isEnabled: boolean;

  @ManyToMany(() => Image)
  @JoinTable()
  images: Image[];

  @ManyToMany(() => ShopItem)
  @JoinTable()
  shopItems: ShopItem[];
}
