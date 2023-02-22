import {
  Body,
  Controller,
  Get,
  Params,
  Post,
  Response,
} from '@decorators/express';
import { Image } from 'entities';
import { ImageService } from 'service';
import { Injectable } from '@decorators/di';

@Injectable()
@Controller('/image')
export class ImageController {
  constructor(private imageService: ImageService) {}
  @Get('/')
  async getImages(@Response() res: any) {
    return await this.imageService.findAll();
  }

  @Get('/:id')
  async getImage(@Response() res: any, @Params('id') id: string) {
    return await this.imageService.findById(+id);
  }

  @Post('/')
  async createImage(@Response() res: any, @Body() image: Partial<Image>) {
    return await this.imageService.create(image);
  }
}
