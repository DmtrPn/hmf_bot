import { Inject } from 'typescript-ioc';

import '@core/test/testRunner';

import { INotificationCrudService } from '@retreat/domain/notification/INotificationCrudService';
import { NotificationCreateData, NotificationStatus } from '@retreat/domain/notification/types';

import { sendNotifications } from '../SendNotificationsCommand';
import { createFakeUser } from '../../user/test/utils/createFakeUser';
import { createFakeRetreat } from '../../retreat/test/utils/createFakeRetreat';
import { getFakeNotificationCreationParams } from './utils/notificationFakeData';

@Describe()
export class SendNotificationsSpec {
    @Inject protected crudService!: INotificationCrudService;

    @Test('Send notification')
    public async createTest(): Promise<void> {
        const { id } = await this.createFakeNotification();
        await sendNotifications();
        const notification = await this.crudService.getById(id);

        expect(notification.status).toEqual(NotificationStatus.Executed);
    }

    private async createFakeNotification(): Promise<NotificationCreateData> {
        const { id: userId, chatId } = await createFakeUser();
        const { id: retreatId } = await createFakeRetreat({ userId });
        const notification = getFakeNotificationCreationParams({ retreatId, chatId });

        await this.crudService.create(notification);

        return notification;
    }
}