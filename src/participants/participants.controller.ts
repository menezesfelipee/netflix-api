import { Participant } from '.prisma/client';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { ParticipantsService } from './participants.service';

@Controller('participants')
export class ParticipantsController {
    constructor(private participantsService: ParticipantsService) {}

    @Get('/')
    @UsePipes(ValidationPipe)
    async listAll(): Promise<Participant[]> {
        return this.participantsService.getAll();
    }

    @Get('/:id')
    @UsePipes(ValidationPipe)
    async showOne(@Param('id', ParseIntPipe) id: number): Promise<Participant> {
        return this.participantsService.getOne(id);
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    async create(@Body() createParticipant: CreateParticipantDto): Promise<Participant> {
        return this.participantsService.create(createParticipant);
    }

    @Put('update/:id')
    @UsePipes(ValidationPipe)
    async update(
        @Body() updateParticipant: CreateParticipantDto,
        @Param('id', ParseIntPipe) id: number,
    ): Promise<Participant> {
        return this.participantsService.updateOne(id, updateParticipant);
    }

    @Delete('delete/:id')
    @UsePipes(ValidationPipe)
    async delete(@Param('id') id: string): Promise<Participant> {
        return this.participantsService.deleteOne({ id: Number(id)});
    }
}
