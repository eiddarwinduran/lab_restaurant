import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateRepartidorDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre del repartidor no debe ser vacío' })
    @IsString({ message: 'El campo nombre del repartidor debe ser de tipo cadena' })
    readonly nombreR: string;

    @ApiProperty()
    @IsNumber({})
    readonly carnet:number;

    @ApiProperty()
    @IsNumber({})
    readonly edad:number;
}
