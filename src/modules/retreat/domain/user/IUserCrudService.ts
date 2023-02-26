import { TransactionManager } from '@common/infrastructure/TransactionManager';
import { UserModel } from '@retreat/infrastructure/user/UserModel';
import { UserFindOptions, UserUpdateData, UserCreateData } from '@retreat/domain/user/types';

export abstract class IUserCrudService extends TransactionManager {
    public abstract find(options: UserFindOptions): Promise<UserModel[]>;
    public abstract getById(id: string): Promise<UserModel>;
    public abstract create(params: UserCreateData): void;
    public abstract update(id: string, params: UserUpdateData): void;
    public abstract remove(id: string): void;
}
