import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePedidoDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre del producto no debe ser vacío' })
    @IsString({ message: 'El campo nombre del producto debe ser de tipo cadena' })
    readonly nombreC: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre del producto no debe ser vacío' })
    @IsString({ message: 'El campo nombre del producto debe ser de tipo cadena' })
    readonly nombreProducto: string;

    @ApiProperty()
    @IsNumber({})
    readonly cantidad:number;

    

    @ApiProperty()
    @IsNotEmpty({message:'el campo de direccion no debe estar vacion'})
    @IsString({ message: 'El campo de deireccion debe ser de tipo cadena' })
    readonly direccion:string;

}
