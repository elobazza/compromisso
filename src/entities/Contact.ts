import { v4 as uuid } from "uuid";
import { Entity, Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity("contato")
class Contact {

    @PrimaryGeneratedColumn('increment')
    readonly idcontato: number;

    @Column()
    nome: string;

    @Column()
    fone: string;

    @Column()
    email: string;

    @JoinColumn({ name: "usuario" })
    @ManyToOne(() => User)
    @Column()
    usuario: string;
}

export { Contact };