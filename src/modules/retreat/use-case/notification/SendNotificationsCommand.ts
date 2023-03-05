import { Inject } from 'typescript-ioc';

import { UseCaseCommand } from '@common/use-cases/UseCaseCommand';
import { ITelegrafService } from '../../domain/telegraf/ITelegrafService';

export class SendNotificationsCommand extends UseCaseCommand<{}> {

    @Inject protected telegrafService!: ITelegrafService;

    public async execute(): Promise<void> {
        // console.log('send message');
        // const app = new Telegraf(process.env.BOT_TOKEN!);
        // console.log('app', app);
        // console.log('app.telegram.sendMessage', app.telegram.sendMessage);
        // this.telegrafBot.telegram.sendMessage()
    }

}

export const sendNotifications = () => (new SendNotificationsCommand({})).execute();
