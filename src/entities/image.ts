import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
  })
  url: string;

  @Column({
    default: 1,
  })
  position: number;
}

