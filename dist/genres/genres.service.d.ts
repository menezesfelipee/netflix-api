import { Genre, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class GenresService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Genre[]>;
    getOne(id: number): Promise<Genre>;
    create(data: Prisma.GenreCreateInput): Promise<Genre>;
    updateOne(id: number, data: Prisma.GenreCreateInput): Promise<Genre>;
    deleteOne(where: Prisma.GenreWhereUniqueInput): Promise<Genre>;
}
