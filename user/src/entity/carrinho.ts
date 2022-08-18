import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn, ManyToOne, } from "typeorm"
import { Venda } from "./venda"
import { Produto } from "./produto"


@Entity()
export class Carrinho {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    qtd: number

    @Column()
    preco: number

    @ManyToOne(() => Produto)
    @JoinColumn({name: 'produto_id'})
    produto: Produto

    @ManyToOne(() => Venda)
    @JoinColumn({name: 'venda_id'})
    venda: Venda
       
}