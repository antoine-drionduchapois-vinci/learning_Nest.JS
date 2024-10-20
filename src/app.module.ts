import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

import { FighterModule } from './fighter/fighter.module';

@Module({
  imports: [UserModule, FighterModule],
})
export class AppModule {}
