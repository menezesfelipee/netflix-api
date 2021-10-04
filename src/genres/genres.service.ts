import { Genre, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GenresService {
    constructor(private prisma: PrismaService) {}

    async getAll(): Promise<Genre[]> {
        return this.prisma.genre.findMany();
    }

    async getOne(id: number): Promise<Genre> {
        return this.prisma.genre.findUnique({ where: { id: id }});
    }

    async create(data: Prisma.GenreCreateInput): Promise<Genre> {
        return this.prisma.genre.create({ data });
    }

    async updateOne(
        id: number,
        data: Prisma.GenreCreateInput
    ): Promise<Genre> {
        return this.prisma.genre.update({
            data,
            where: { id: id }
        });
    }

    async deleteOne(where: Prisma.GenreWhereUniqueInput): Promise<Genre> {
        return this.prisma.genre.delete({ where });
      }
    
}
