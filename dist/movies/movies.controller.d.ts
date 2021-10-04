import { Movie } from '.prisma/client';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';
export declare class MoviesController {
    private moviesService;
    constructor(moviesService: MoviesService);
    listAll(): Promise<Movie[]>;
    showOne(id: number): Promise<Movie>;
    create(createMovie: CreateMovieDto): Promise<Movie>;
    update(updateMovie: CreateMovieDto, id: number): Promise<Movie>;
    delete(id: string): Promise<Movie>;
}
