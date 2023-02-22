import {
  Response,
  Params,
  Controller,
  Get,
  Post,
  Body,
} from '@decorators/express';
import { CategoryService } from 'service';
import { CategoryDto } from 'entities/dto';
import { Injectable } from '@decorators/di';

@Injectable()
@Controller('/category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get('/')
  async getCategories(@Response() res: any) {
    return await this.categoryService.findAll();
  }

  @Get('/:id')
  async getCategory(@Response() res: any, @Params('id') id: string) {
    return await this.categoryService.findById(+id);
  }

  @Post('/')
  async createCategory(@Response() res: any, @Body() category: CategoryDto) {
    return await this.categoryService.create(category);
  }
}
