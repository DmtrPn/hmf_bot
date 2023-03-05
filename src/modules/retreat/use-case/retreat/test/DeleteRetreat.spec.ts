import '@core/di/IoC';
import { Inject } from 'typescript-ioc';
import '@core/test/testRunner';

import { IRetreatCrudService } from '@retreat/domain/retreat/IRetreatCrudService';
import { expectError } from '@core/test/expectError';
import { NotFoundError } from '@common/domain/errors/NotFoundError';
import { FakeParams } from '@core/test/FakeParams';

import { createRetreat } from '../RetreatCreateCommand';
import { deleteRetreat } from '../RetreatDeleteCommand';
import { getFakeRetreatCreationParams } from './utils/retreatFakeData';
import { createFakeUser } from '../../user/test/utils/createFakeUser';

@Describe()
export class DaleteRetreatSpec {
    @Inject protected crudService!: IRetreatCrudService;
    private userId!: string;

    @BeforeAll()
    public async beforeAll(): Promise<void> {
        this.userId = await createFakeUser();
    }

    @Test('Delete retreat test')
    public async deleteTest(): Promise<void> {
        const params = getFakeRetreatCreationParams({ userId: this.userId });
        await createRetreat(params);
        await deleteRetreat(params);
        const retreat = await this.crudService.getById(params.id);

        expect(retreat).toBeNull();
    }

    @expectError(NotFoundError)
    @Test('Cant delete not exist retreat')
    public async createRetreatWithExistIdTest(): Promise<void> {
        await deleteRetreat({ id: FakeParams.getId() });
    }

}