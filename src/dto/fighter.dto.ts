import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class FighterDto{
    @IsNumber()
    id: number;
    @IsNotEmpty()
    name: String;
    @IsNotEmpty()
    record: String;

}