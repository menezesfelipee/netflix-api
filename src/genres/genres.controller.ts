import { Genre } from '.prisma/client';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { GenresService } from './genres.service';

@Controller('genres')
export class GenresController {
    constructor(private genresService: GenresService) {}

    @Get('/')
    @UsePipes(ValidationPipe)
    async listAll(): Promise<Genre[]> {
        return this.genresService.getAll();
    }

    @Get('/:id')
    @UsePipes(ValidationPipe)
    async showOne(@Param('id', ParseIntPipe) id: number): Promise<Genre> {
        return this.genresService.getOne(id);
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    async create(@Body() createGenre: CreateGenreDto): Promise<Genre> {
        return this.genresService.create(createGenre);
    }

    @Put('/update/:id')
    @UsePipes(ValidationPipe)
    async update(
        @Body() updateGenre: CreateGenreDto,
        @Param('id', ParseIntPipe) id: number,
    ): Promise<Genre> {
        return this.genresService.updateOne(id, updateGenre);
    }

    @Delete('/delete/:id')
    @UsePipes(ValidationPipe)
    async delete(@Param('id') id: string): Promise<Genre> {
        return this.genresService.deleteOne({ id: Number(id)});
    }
}
