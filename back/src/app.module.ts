import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import path from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LandModule } from './land/land.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, '../uploads'),
    }),
    LandModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
