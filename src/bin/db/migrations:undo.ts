#!/usr/bin/env node
import '../../bootstrap';
import { Config } from '@core/config/Config';
import { ConfigName, DbConfig } from '@core/config/types';
import { DataSource } from 'typeorm';

async function migrations(): Promise<void> {
    const { entities, ...dbConfig } = <DbConfig>Config.getConfig(ConfigName.Db);
    const dataSource = new DataSource(dbConfig);
    await dataSource.initialize();
    await dataSource.undoLastMigration();
    await dataSource.destroy();
}

migrations();
