import { UsuarioEntity } from "src/usuario/entities/usuario.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('pedidos')
export class PedidoEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  //@Column({name: 'id_usuario'})
  idUsuario:string;

  @Column()
  direccion: string;

  @Column()
  nombreProducto:string;

  @Column()
  cantidad:number;

  @CreateDateColumn({ name: 'fecha_pedido' })
  fechaPedido: Date;

  //@ManyToOne(() => UsuarioEntity, (usuarios) => usuarios.pedido)
  //@JoinColumn({ name: 'id_usuario', referencedColumnName: 'id' })
  //usuarios: UsuarioEntity;
}
