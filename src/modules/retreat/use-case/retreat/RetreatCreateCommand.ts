import { RetreatCreateData } from '@retreat/domain/retreat/types';
import { AlreadyExistsError } from '@components/common/domain/errors/AlreadyExistsError';

import { RetreatCommand } from './RetreatCommand';

interface Params extends RetreatCreateData {}

export class RetreatCreateCommand extends RetreatCommand<Params> {

    public async execute(): Promise<void> {
        const retreat = await this.crudService.getById(this.params.id);

        if (!!retreat) {
            throw new AlreadyExistsError({ entityName: 'Retreat', id: this.params.id });
        }
        await this.crudService.create(this.params);
    }

}

export const createRetreat = (params: Params) => (new RetreatCreateCommand(params)).execute();
