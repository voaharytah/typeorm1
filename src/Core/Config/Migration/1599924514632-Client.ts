import {MigrationInterface, QueryRunner} from "typeorm";

export class Client1599924514632 implements MigrationInterface {
    name = 'Client1599924514632'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `client` DROP COLUMN `updatetedAt`");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `client` ADD `updatetedAt` datetime NOT NULL");
    }

}
