import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('menu')
export class Menu {
 @PrimaryColumn()
  nombre: string;

  @Column()
  precio: number;

  @Column()
  disponibilidad:string;

}
