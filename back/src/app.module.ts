import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LandModule } from './land/land.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: '../uploads',
    }),
    LandModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
