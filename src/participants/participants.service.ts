import { Participant, Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParticipantsService {
    constructor(private prisma: PrismaService) {}

    async getAll(): Promise<Participant[]> {
        return this.prisma.participant.findMany();
    }

    async getOne(id: number): Promise<Participant> {
        return this.prisma.participant.findUnique({ where: { id: id }});
    }

    async create(data: Prisma.ParticipantCreateInput): Promise<Participant> {
        return this.prisma.participant.create({ data });
    }

    async updateOne(
        id: number,
        data: Prisma.ParticipantCreateInput
    ): Promise<Participant> {
        return this.prisma.participant.update({
            data,
            where: { id: id }
        });
    }

    async deleteOne(where: Prisma.ParticipantWhereUniqueInput): Promise<Participant> {
        return this.prisma.participant.delete({ where });
      }
    
}
