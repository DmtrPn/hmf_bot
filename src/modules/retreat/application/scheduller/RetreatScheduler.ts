import { Cron, CronExpression } from '@nestjs/schedule';

import { sendNotifications } from '@retreat/use-case/notification/SendNotificationsCommand';

export class RetreatScheduler {
    @Cron(CronExpression.EVERY_5_MINUTES)
    public async handleCron(): Promise<void> {
        await sendNotifications();
    }
}
