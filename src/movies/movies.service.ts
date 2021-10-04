import { Movie, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MoviesService {
    constructor(private prisma: PrismaService) {}

    async getAll(): Promise<Movie[]> {
        return this.prisma.movie.findMany();
    }

    async getOne(id: number): Promise<Movie> {
        return this.prisma.movie.findUnique({ where: { id: id }});
    }

    async create(data: Prisma.MovieCreateInput): Promise<Movie> {
        return this.prisma.movie.create({ data });
    }

    async updateOne(
        id: number,
        data: Prisma.MovieCreateInput
    ): Promise<Movie> {
        return this.prisma.movie.update({
            data,
            where: { id: id }
        });
    }

    async deleteOne(where: Prisma.MovieWhereUniqueInput): Promise<Movie> {
        return this.prisma.movie.delete({ where });
      }
    
}
