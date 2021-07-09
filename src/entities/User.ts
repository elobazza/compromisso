import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuario")
class User {

    @PrimaryGeneratedColumn('increment')
    readonly idusuario: number;

    @Column()
    nome: string;

    @Column()
    username: string;

    @Column()
    senha: string;
}

export { User };