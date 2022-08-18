import { DataSource, Entity } from "typeorm"
import { Carrinho } from "./entity/carrinho"
import { Cliente } from "./entity/cliente"
import { Produto } from "./entity/produto"
import { Venda } from "./entity/venda"


const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456",
    database: "postgres",
    entities: [ Venda, Produto, Cliente, Carrinho],
    logging: false,
    synchronize: true,
})

export default dataSource