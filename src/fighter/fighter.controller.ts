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
    try {
      console.log(fighterDto);
      return this.fighterService.createFighter(fighterDto);
    } catch (error) {
      return Error;
    }
  }
}
