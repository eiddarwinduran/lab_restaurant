import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('repartidor')
export class RepartidorEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombreR:string;

    @Column()
    carnet:number;

    @Column()
    edad:number;

}
