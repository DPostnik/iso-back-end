import {
  Body,
  Controller,
  Get,
  Params,
  Post,
  Response,
} from '@decorators/express';
import { ShopItem } from 'entities';
import { ShopItemService } from 'service';
import { Injectable } from '@decorators/di';

@Injectable()
@Controller('/shop-item')
export class ShopItemController {
  constructor(private shopItemService: ShopItemService) {}
  @Get('/')
  async getShopItems(@Response() res: any) {
    return await this.shopItemService.findAll();
  }

  @Get('/:id')
  async getShopItem(@Response() res: any, @Params('id') id: string) {
    return await this.shopItemService.findById(+id);
  }

  @Post('/')
  async createShopItem(
    @Response() res: any,
    @Body() shopItem: Partial<ShopItem>,
  ) {
    return await this.shopItemService.create(shopItem);
  }
}
