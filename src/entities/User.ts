import { v4 as uuid } from "uuid";
import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("usuario")
class User {

    @PrimaryColumn()
    readonly idusuario: string;

    @Column()
    nome: string;

    @Column()
    username: string;

    @Column()
    senha: string;

    constructor() {
        if (!this.idusuario) {
            this.idusuario = uuid();
        }
    }
}

export { User };