import { NotificationModel } from '@retreat/infrastructure/notification/NotificationModel';
import { NotificationStatus } from '@retreat/domain/notification/types';

import { sendNotification } from './SendNotificationCommand';
import { NotificationCommand } from './NotificationCommand';

export class SendNotificationsCommand extends NotificationCommand<{}> {

    public async execute(): Promise<void> {
        const actualNotifications = await this.getActualNotifications();
        await Promise.all(actualNotifications.map(model => sendNotification(model)));
    }

    private async getActualNotifications(): Promise<NotificationModel[]> {
        return this.crudService.find({
            status: NotificationStatus.Active,
            executeBefore: new Date(),
        });
    }

}

export const sendNotifications = () => (new SendNotificationsCommand({})).execute();
