import { UserCreateData } from '@retreat/domain/user/types';
import { AlreadyExistsError } from '@components/common/domain/errors/AlreadyExistsError';

import { UserCommand } from './UserCommand';

interface Params extends UserCreateData {}

export class UserCreateCommand extends UserCommand<Params> {

    public async execute(): Promise<void> {
        const user = await this.crudService.getById(this.params.id);

        if (!!user) {
            throw new AlreadyExistsError({ entityName: 'User', id: this.params.id });
        }
        await this.crudService.create(this.params);
    }

}

export const createUser = (params: Params) => (new UserCreateCommand(params)).execute();
