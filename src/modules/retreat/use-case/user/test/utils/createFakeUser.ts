import { getFakeUserCreationParams } from './userFakeData';
import { createUser } from '../../UserCreateCommand';

export async function createFakeUser(): Promise<string> {
    const params = getFakeUserCreationParams();
    await createUser(params);
    return params.id;
}
