import { PedidoEntity } from 'src/pedido/entities/pedido.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuarios')
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  usuario: string;

  @Column({ length: 150, select: false })
  clave: string;

  @Column({ length: 50 })
  email: string;

  @OneToMany(() => PedidoEntity, pedido => pedido.usuarios)
  pedido: PedidoEntity[];
}
