import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCompromises1625754566878 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compromisso",
                columns: [
                    {
                        name: "idcompromisso",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "idcontato",
                        type: "uuid",
                    },
                    {
                        name: "usuario",
                        type: "uuid",
                    },
                    {
                        name: "descricao",
                        type: "varchar(300)",
                    },
                    {
                        name: "local",
                        type: "varchar(100)",
                    },
                    {
                        name: "data",
                        type: "date",
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
                    },
                    {
                        name: "FKContato",
                        referencedTableName: "contato",
                        referencedColumnNames: ["idcontato"],
                        columnNames: ["idcontato"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL",
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compromisso");
    }

}
