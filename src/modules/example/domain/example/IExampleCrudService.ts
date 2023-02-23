import { TransactionManager } from '@common/infrastructure/TransactionManager';
import { ExampleModel } from '@example/infrastructure/example/ExampleModel';
import { ExampleFindOptions, ExampleUpdateData, ExampleCreateData } from '@example/domain/example/types';

export abstract class IExampleCrudService extends TransactionManager {
    public abstract find(options: ExampleFindOptions): Promise<ExampleModel[]>;
    public abstract getById(id: string): Promise<ExampleModel>;
    public abstract create(params: ExampleCreateData): void;
    public abstract update(id: string, params: ExampleUpdateData): void;
    public abstract remove(id: string): void;
}
