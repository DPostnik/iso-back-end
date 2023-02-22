import { AppDataSource } from 'db';
import { Category } from 'entities';
import { Injectable } from '@decorators/di';
import { CategoryDto } from 'entities/dto';

@Injectable()
export class CategoryService {
  async findById(id: number) {
    return await AppDataSource.getRepository(Category).findOne({
      where: { id },
    });
  }
  async findAll() {
    return await AppDataSource.getRepository(Category).findAndCount();
  }

  async create(category: CategoryDto) {
    return await AppDataSource.getRepository(Category).save(category);
  }
}
