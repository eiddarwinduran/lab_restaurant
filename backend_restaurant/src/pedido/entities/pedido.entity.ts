
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('pedidos')
export class PedidoEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  //@Column({name: 'id_platillos'})
  //idPlatillo:number;
  @Column()
  nombreC:string;

  @Column()
  direccion: string;

  @Column()
  nombreProducto:string;

  @Column()
  cantidad:number;


  @CreateDateColumn({ name: 'fecha_pedido' })
  fechaPedido: Date;

  //@ManyToOne(() => PlatilloEntity, (platillo) => platillo.pedido)
  //@JoinColumn({ name: 'idPlatillo', referencedColumnName: 'id' })
  //platillo: PlatilloEntity;
}
