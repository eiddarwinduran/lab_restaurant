import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('platillos')
export class PlatilloEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;
  
  @Column()
  precio:number;
}
