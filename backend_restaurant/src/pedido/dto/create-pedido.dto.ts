import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePedidoDto {

    @ApiProperty()
    @IsNotEmpty({ message: 'El campo nombre del producto no debe ser vacío' })
    @IsString({ message: 'El campo nombre del producto debe ser de tipo cadena' })
    readonly nombreProducto: string;

    @ApiProperty()
    @IsNotEmpty({message:'el campo de cantidad no debe estar vacion'})
    @IsString({ message: 'El campo de cantidad debe ser de tipo cadena' })
    readonly cantidad:string;

    @ApiProperty()
    @IsNotEmpty({message:'el campo de direccion no debe estar vacion'})
    @IsString({ message: 'El campo de deireccion debe ser de tipo cadena' })
    readonly direccion:string;

}
