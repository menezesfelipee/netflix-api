import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateParticipantDto {
    @IsNotEmpty()
    name:       string;

    @IsNotEmpty()
    image:      string;

    @IsNotEmpty()
    birth:      string;
    
    @IsNotEmpty()
    actor:      string;

    @IsOptional()
    movie_id:   number;
}
