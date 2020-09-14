import {MigrationInterface, QueryRunner} from "typeorm";

export class Product1599924974572 implements MigrationInterface {
    name = 'Product1599924974572'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `produit` ADD `createdAt` datetime NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `produit` DROP COLUMN `createdAt`");
    }

}
