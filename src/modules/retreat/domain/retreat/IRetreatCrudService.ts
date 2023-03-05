import { TransactionManager } from '@common/infrastructure/TransactionManager';
import { RetreatModel } from '@retreat/infrastructure/retreat/RetreatModel';
import { RetreatFindOptions, RetreatUpdateData, RetreatCreateData } from '@retreat/domain/retreat/types';

export abstract class IRetreatCrudService extends TransactionManager {
    public abstract find(options: RetreatFindOptions): Promise<RetreatModel[]>;
    public abstract getById(id: string): Promise<RetreatModel>;
    public abstract create(params: RetreatCreateData): void;
    public abstract update(id: string, params: RetreatUpdateData): void;
    public abstract remove(id: string): void;
}
