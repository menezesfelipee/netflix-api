import { Movie } from '.prisma/client';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) {}

    @Get('/')
    @UsePipes(ValidationPipe)
    async listAll(): Promise<Movie[]> {
        return this.moviesService.getAll();
    }

    @Get('/:id')
    @UsePipes(ValidationPipe)
    async showOne(@Param('id', ParseIntPipe) id: number): Promise<Movie> {
        return this.moviesService.getOne(id);
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    async create(@Body() createMovie: CreateMovieDto): Promise<Movie> {
        return this.moviesService.create(createMovie);
    }

    @Put('/update/:id')
    @UsePipes(ValidationPipe)
    async update(
        @Body() updateMovie: CreateMovieDto,
        @Param('id', ParseIntPipe) id: number,
    ): Promise<Movie> {
        return this.moviesService.updateOne(id, updateMovie);
    }

    @Delete('/delete/:id')
    @UsePipes(ValidationPipe)
    async delete(@Param('id') id: string): Promise<Movie> {
        return this.moviesService.deleteOne({ id: Number(id)});
    }
}
