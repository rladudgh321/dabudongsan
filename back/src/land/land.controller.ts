import {
  Body,
  Controller,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import { UploadImageReqDto } from './dto/req.dto';
import { LandService } from './land.service';

@Controller('land')
export class LandController {
  constructor(private readonly landService: LandService) {}

  @UseInterceptors(FileInterceptor('image'))
  @Post('upload/image')
  async uploadImage(
    @Body() { filename }: UploadImageReqDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log({ filename, file });
    return file.filename;
  }

  @Post()
  async landPost(@Body() body, @Res() res: Response) {
    return res.status(201).json(body);
  }
}
