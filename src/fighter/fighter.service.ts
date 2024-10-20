import { Injectable } from '@nestjs/common';
import { FighterDto } from 'src/dto/fighter.dto';
import { Fighter } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FighterService {
  constructor(private prisma: PrismaService) {}

  async createFighter(fighterDto: FighterDto) {
    try {
      const fighter = await this.prisma.fighter.create({
        data: {
            name:fighterDto.name,
            record:fighterDto.record
        }
      });
      return fighter; // Return the created fighter or success response
    } catch (error) {
      throw new Error('Error creating fighter'); // Handle the error
    }
  }

  getAllFighters() {
    const fighters = this.prisma.fighter.findMany();
    return fighters;
  }
}
