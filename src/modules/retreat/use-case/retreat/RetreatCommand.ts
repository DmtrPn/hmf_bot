import { Inject } from 'typescript-ioc';

import { UseCaseCommand } from '@common/use-cases/UseCaseCommand';
import { IRetreatCrudService } from '@retreat/domain/retreat/IRetreatCrudService';

export abstract class RetreatCommand<Params extends object> extends UseCaseCommand<Params> {
    @Inject protected crudService!: IRetreatCrudService;
}
