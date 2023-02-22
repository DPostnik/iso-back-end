import { AppDataSource } from 'db';
import { Image } from 'entities';
import { Injectable } from '@decorators/di';

@Injectable()
export class ImageService {
  async findById(id: number) {
    return await AppDataSource.getRepository(Image).findOne({
      where: { id },
    });
  }
  async findAll() {
    return await AppDataSource.getRepository(Image).findAndCount();
  }

  async create(image: Partial<Image>) {
    return await AppDataSource.getRepository(Image).save(image);
  }
}
