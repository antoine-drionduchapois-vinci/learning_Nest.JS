import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class FighterDto{
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    record: string;

}