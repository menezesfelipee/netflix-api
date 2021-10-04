import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MoviesModule } from './movies/movies.module';
import { GenresModule } from './genres/genres.module';
import { ParticipantsModule } from './participants/participants.module';

@Module({
  imports: [PrismaModule, MoviesModule, GenresModule, ParticipantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
