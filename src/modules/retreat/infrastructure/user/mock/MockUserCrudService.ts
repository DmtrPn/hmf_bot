import { Singleton } from 'typescript-ioc';

import type { IUserCrudService } from '@retreat/domain/user/IUserCrudService';
import { UserCreateData, UserFindOptions, UserUpdateData } from '@retreat/domain/user/types';

import { UserModel } from '../UserModel';
import { UserList } from './UserList';

@Singleton
export class MockUserCrudService implements IUserCrudService {

    private list = new UserList();

    public create(params: UserCreateData): void {
        this.list.add([params]);
    }

    public find(options: UserFindOptions): Promise<UserModel[]> {
        return Promise.resolve(this.list.getFilteredValues(options));
    }

    public getById(id: string): Promise<UserModel> {
        return Promise.resolve(this.list.get(id)!);
    }

    public remove(id: string): void {
        this.list.remove(id);
    }

    public update(id: string, params: UserUpdateData): void {
        const current = this.list.get(id);
        this.list.update(id, { ...current, ...params });
    }
}
