import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { PedidoEntity } from 'src/pedido/entities/pedido.entity';

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

  @BeforeInsert()
@BeforeUpdate()
async hashPassword() {
  const salt = await bcrypt.genSalt();
  this.clave = await bcrypt.hash(this.clave, salt);
}

async validatePassword(plainPassword: string): Promise<boolean> {
  return bcrypt.compare(plainPassword, this.clave);
}
//@OneToMany(() => PedidoEntity, pedido => pedido.usuarios)
  //pedido: PedidoEntity[];
  
}
