import { Cron, CronExpression } from '@nestjs/schedule';

export class RetreatScheduler {
    @Cron(CronExpression.EVERY_10_SECONDS)
    handleCron() {
        console.log('Scheduller =)');
    }
}