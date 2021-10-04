import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';

@Module({
  imports: [PrismaModule],
  providers: [MoviesService],
  controllers: [MoviesController]
})
export class MoviesModule {}
