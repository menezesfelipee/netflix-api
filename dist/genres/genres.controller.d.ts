import { Genre } from '.prisma/client';
import { CreateGenreDto } from './dto/create-genre.dto';
import { GenresService } from './genres.service';
export declare class GenresController {
    private genresService;
    constructor(genresService: GenresService);
    listAll(): Promise<Genre[]>;
    showOne(id: number): Promise<Genre>;
    create(createGenre: CreateGenreDto): Promise<Genre>;
    update(updateGenre: CreateGenreDto, id: number): Promise<Genre>;
    delete(id: string): Promise<Genre>;
}
