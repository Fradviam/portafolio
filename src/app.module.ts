import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PortafolioModule } from './portafolio/portafolio.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PortafolioModule],
})
export class AppModule {}
