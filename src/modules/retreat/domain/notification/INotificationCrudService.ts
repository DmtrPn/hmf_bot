import { TransactionManager } from '@common/infrastructure/TransactionManager';
import { NotificationModel } from '../../infrastructure/notification/NotificationModel';
import { NotificationFindOptions, NotificationUpdateData, NotificationCreateData } from './types';

export abstract class INotificationCrudService extends TransactionManager {
    public abstract find(options: NotificationFindOptions): Promise<NotificationModel[]>;
    public abstract getById(id: string): Promise<NotificationModel>;
    public abstract create(params: NotificationCreateData): void;
    public abstract update(id: string, params: NotificationUpdateData): void;
    public abstract remove(id: string): void;
}
