import { Module } from '@nestjs/common';
import { FighterService } from './fighter.service';
import { FighterController } from './fighter.controller';

@Module({
  providers: [FighterService],
  controllers: [FighterController]
})
export class FighterModule {}
