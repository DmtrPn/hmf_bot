import '@core/di/IoC';
import { Inject } from 'typescript-ioc';
import '@core/test/testRunner';

import { IRetreatCrudService } from '@retreat/domain/retreat/IRetreatCrudService';
import { expectError } from '@core/test/expectError';
import { AlreadyExistsError } from '@common/domain/errors/AlreadyExistsError';

import { createRetreat } from '../RetreatCreateCommand';
import { getFakeRetreatCreationParams } from './utils/retreatFakeData';
import { createFakeUser } from '../../user/test/utils/createFakeUser';

@Describe()
export class CreateRetreatSpec {
    @Inject protected crudService!: IRetreatCrudService;
    private userId!: string;

    @BeforeAll()
    public async beforeAll(): Promise<void> {
        this.userId = await createFakeUser();
    }

    @Test('Create retreat test')
    public async createTest(): Promise<void> {
        const params = getFakeRetreatCreationParams({ userId: this.userId });
        await createRetreat(params);

        const retreat = await this.crudService.getById(params.id);

        expect(retreat).toEqual(params);
    }

    @expectError(AlreadyExistsError)
    @Test('Cant create retreat with exist id')
    public async createRetreatWithExistIdTest(): Promise<void> {
        const params = getFakeRetreatCreationParams({ userId: this.userId });
        await createRetreat(params);
        await createRetreat(params);
    }

}