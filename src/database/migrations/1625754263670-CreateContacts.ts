import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateContacts1625754263670 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "contato",
                columns: [
                    {
                        name: "idcontato",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "usuario",
                        type: "integer",
                    },
                    {
                        name: "nome",
                        type: "varchar(50)",
                    },
                    {
                        name: "fone",
                        type: "varchar(15)",
                    },
                    {
                        name: "email",
                        type: "varchar(50)",
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUsuario",
                        referencedTableName: "usuario",
                        referencedColumnNames: ["idusuario"],
                        columnNames: ["usuario"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("contato");
    }

}
