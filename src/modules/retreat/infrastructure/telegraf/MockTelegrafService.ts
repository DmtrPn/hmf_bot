import { ITelegrafService } from '../../domain/telegraf/ITelegrafService';

export class MockTelegrafService implements ITelegrafService {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    public async sendMessage(chatId: number | string, text: string): Promise<void> {
        console.log();
    }

}
