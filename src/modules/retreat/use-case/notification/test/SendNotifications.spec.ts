import { Inject } from 'typescript-ioc';

import '@core/test/testRunner';

import { IUserCrudService } from '@retreat/domain/user/IUserCrudService';
// import { expectError } from '@core/test/expectError';
// import { AlreadyExistsError } from '@common/domain/errors/AlreadyExistsError';
//
// import { sendNotifications } from '../SendNotificationsCommand';

@Describe()
export class SendNotificationsSpec {
    @Inject protected crudService!: IUserCrudService;

    @Test('Send ')
    public async createTest(): Promise<void> {

        expect({}).toEqual({});
    }

}