import { Body, Controller, Get, Post } from '@nestjs/common';
import { FighterService } from './fighter.service';
import { FighterDto } from 'src/dto/fighter.dto';

@Controller('fighter')
export class FighterController {
  constructor(private fighterService: FighterService) {}

  @Get()
  getFighters() {
    return this.fighterService.getAllFighters();
  }

  @Post()
  createFighter(@Body() fighterDto: FighterDto) {
   if(this.fighterService.createFighter(fighterDto)){
    return 'Fighter created succesfully';
   }else{
    return 'Error creating fighter';
   }
  }
}
