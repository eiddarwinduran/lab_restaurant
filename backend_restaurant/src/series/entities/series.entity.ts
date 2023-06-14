import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('series')
export class SeriesEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length : 250})
    titulo:string;

    @Column({length:5000})
    sinopsis:string;

    @Column({length:100})
    director:string;

    @Column()
    duracion:number;

    @Column({ name: 'fecha_estreno'})
    fechaEstreno:Date;

}
