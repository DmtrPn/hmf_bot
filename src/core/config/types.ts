import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export enum ConfigName {
    Log = 'log',
    Db = 'db',
}

export interface DbConfig extends PostgresConnectionOptions {
    type: 'postgres';
    host: string;
    database: string;
    username: string;
    password: string;
}

export type ConfigType = DbConfig;
