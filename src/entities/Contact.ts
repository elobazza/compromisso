import { v4 as uuid } from "uuid";
import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("contato")
class Contact {

    @PrimaryColumn()
    readonly idcontato: string;

    @Column()
    nome: string;

    @Column()
    fone: string;

    @Column()
    email: string;

    @Column()
    usuario: string;

    constructor() {
        if (!this.idcontato) {
            this.idcontato = uuid();
        }
    }
}

export { Contact };