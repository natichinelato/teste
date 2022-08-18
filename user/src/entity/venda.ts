import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from "typeorm"
import { Cliente } from "./cliente"



@Entity()
export class Venda {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    data: number

    @Column()
    status: string
    
    @ManyToOne(() => Cliente )
    @JoinColumn({name: 'cliente_id'})
       user: Cliente
   
}