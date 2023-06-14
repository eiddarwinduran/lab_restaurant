import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsDefined, IsNotEmpty, IsString } from "class-validator";


export class CreateSeriesDto {
    @ApiProperty()
  @IsNotEmpty({ message: 'El campo titulo no debe ser vacío' })
  @IsString({ message: 'El titulo debe ser de tipo cadena' })
  readonly titulo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo sinopsis no debe ser vacío' })
  @IsString({ message: 'sinopsis debe ser de tipo cadena' })
  readonly sinopsis: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo director no debe ser vacío' })
  @IsString({ message: 'El campo director debe ser de tipo cadena' })
  readonly director: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo duracion no debe ser vacío' })
  readonly duracion:number;
  @ApiProperty()
  @IsDefined({ message: 'El campo fechaEstreno debe estar definido' })
  @IsDateString({}, { message: 'El campo fechaEstreno debe ser de tipo fecha' })
  readonly fechaEstreno: Date;
}
