import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1625704692793 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "usuario",
                columns: [
                    {
                        name: "idusuario",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "nome",
                        type: "varchar(50)",
                    },
                    {
                        name: "username",
                        type: "varchar(10)",
                    },
                    {
                        name: "senha",
                        type: "varchar(8)",
                    }
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuario");
    }

}
