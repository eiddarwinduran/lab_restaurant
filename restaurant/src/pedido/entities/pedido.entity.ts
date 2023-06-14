import { UsuarioEntity } from "src/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('pedidos')
export class PedidoEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({name: 'nombre_usuario'})
  nombreUsuario:string;

  @Column()
  direccion: string;

  @Column()
  nombreProducto:string;

  @Column()
  cantidad:string;

  @ManyToOne(() => UsuarioEntity, (usuarios) => usuarios.pedido)
  @JoinColumn({ name: 'nombre_usuario', referencedColumnName: 'id' })
  usuarios: UsuarioEntity;
}
