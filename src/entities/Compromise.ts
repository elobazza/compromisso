import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateQueryBuilder } from "typeorm";
import { Contact } from "./Contact";
import { User } from "./User";

@Entity("compromisso")
class Compromise {

    @PrimaryGeneratedColumn('increment')
    readonly idcompromisso: number;

    @Column()
    descricao: string;

    @Column()
    local: string;

    @Column()
    data: Date;

    @JoinColumn({ name: "idcontato" })
    @ManyToOne(() => Contact)
    @Column()
    idcontato: string;

    @JoinColumn({ name: "usuario" })
    @ManyToOne(() => User)
    @Column()
    usuario: string;
}

export { Compromise };