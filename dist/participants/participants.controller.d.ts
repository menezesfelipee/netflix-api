import { Participant } from '.prisma/client';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { ParticipantsService } from './participants.service';
export declare class ParticipantsController {
    private participantsService;
    constructor(participantsService: ParticipantsService);
    listAll(): Promise<Participant[]>;
    showOne(id: number): Promise<Participant>;
    create(createParticipant: CreateParticipantDto): Promise<Participant>;
    update(updateParticipant: CreateParticipantDto, id: number): Promise<Participant>;
    delete(id: string): Promise<Participant>;
}
