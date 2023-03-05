import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRetreatTable1677947177303 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE retreat (
                retreat_id UUID PRIMARY KEY,
                user_id UUID NOT NULL REFERENCES users(user_id),
                start_date TIMESTAMPTZ NOT NULL
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE retreat;
        `);
    }

}
