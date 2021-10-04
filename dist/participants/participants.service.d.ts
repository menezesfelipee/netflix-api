import { Participant, Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ParticipantsService {
    private prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<Participant[]>;
    getOne(id: number): Promise<Participant>;
    create(data: Prisma.ParticipantCreateInput): Promise<Participant>;
    updateOne(id: number, data: Prisma.ParticipantCreateInput): Promise<Participant>;
    deleteOne(where: Prisma.ParticipantWhereUniqueInput): Promise<Participant>;
}
