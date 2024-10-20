import { Injectable } from '@nestjs/common';
import { FighterDto } from 'src/dto/fighter.dto';

@Injectable()
export class FighterService {

    createFighter(fighterDto : FighterDto) {
        return true;
    }


    getAllFighters() {
        const fighterA = {
            id:1,
            name:"Antoine",
            record:"11-0-0"
        }
        const fighterB = {
            id:2,
            name:"Antoine",
            record:"11-0-0"
        }
        const fighters = [fighterA,fighterB];

       return fighters;
    }
}
