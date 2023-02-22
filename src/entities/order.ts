import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderItem } from 'entities/order-item';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  price: number;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  orderItems: OrderItem[];

  @CreateDateColumn()
  created_at: Date;
}
