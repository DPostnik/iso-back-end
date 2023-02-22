import {
  Body,
  Controller,
  Get,
  Params,
  Post,
  Response,
} from '@decorators/express';
import { AppDataSource } from 'db';
import { Image } from 'entities';
import { ImageDto } from 'entities/dto';

@Controller('/image')
export class ImageController {
  @Get('/')
  async getCategories(@Response() res: any) {
    return await AppDataSource.getRepository(Image).findAndCount();
  }

  @Get('/:id')
  async getCategory(@Response() res: any, @Params('id') id: string) {
    return await AppDataSource.getRepository(Image).findOne({
      where: { id: +id },
    });
  }

  @Post('/')
  async createCategory(@Response() res: any, @Body() category: ImageDto) {
    return await AppDataSource.getRepository(Image).save(category);
  }
}
