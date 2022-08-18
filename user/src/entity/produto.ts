import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm"


@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    descricao: string

    @Column()
    preco: number

    @Column()
    estoque: number

   
}