import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateMovieDto {
    @IsNotEmpty()
    name:          string;

    @IsNotEmpty()
    release_year:  number;
    
    @IsNotEmpty()
    duration:      number;

    @IsOptional()
    image:         string;

    @IsOptional()
    genre_id:      number;
}
