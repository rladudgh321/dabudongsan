import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path from 'path';
import { LandController } from './land.controller';
import { LandService } from './land.service';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({
        destination(req, file, cb) {
          cb(null, 'uploads');
        },
        filename(req, file, cb) {
          const ext = path.extname(file.originalname);
          const basename = path.basename(file.originalname, ext);
          cb(null, basename + '_' + new Date().getTime() + ext);
        },
      }),
      limits: {
        fileSize: 5 * 1024 * 1024,
        files: 1,
      },
    }),
  ],
  controllers: [LandController],
  providers: [LandService],
})
export class LandModule {}
