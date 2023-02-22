import {
  Body,
  Controller,
  Get,
  Params,
  Post,
  Response,
} from '@decorators/express';
import { AppDataSource } from 'db';
import { ShopItem } from 'entities';
import { ShopItemDto } from 'entities/dto';

@Controller('/shop-item')
export class ShopItemController {
  @Get('/')
  async getCategories(@Response() res: any) {
    return await AppDataSource.getRepository(ShopItem).findAndCount();
  }

  @Get('/:id')
  async getCategory(@Response() res: any, @Params('id') id: string) {
    return await AppDataSource.getRepository(ShopItem).findOne({
      where: { id: +id },
    });
  }

  @Post('/')
  async createCategory(@Response() res: any, @Body() shopItem: ShopItemDto) {
    return await AppDataSource.getRepository(ShopItem).save(shopItem);
  }
}
