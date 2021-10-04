import { Movie, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class MoviesService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Movie[]>;
    getOne(id: number): Promise<Movie>;
    create(data: Prisma.MovieCreateInput): Promise<Movie>;
    updateOne(id: number, data: Prisma.MovieCreateInput): Promise<Movie>;
    deleteOne(where: Prisma.MovieWhereUniqueInput): Promise<Movie>;
}
