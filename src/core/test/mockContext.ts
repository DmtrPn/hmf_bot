import { Context as TelegramContext, Telegram } from 'telegraf';

import { MockContext } from './types';
import { FakeParams } from './FakeParams';

export function makeMockContext(update: object = {}, contextExtra = {}): MockContext {
    const tg = new Telegram('', {});
    // @ts-ignore
    tg.callApi = (method, data) => {
        console.log(`mocked tg callApi ${method}`, data);
    };

    // @ts-ignore
    const ctx: MockContext = new TelegramContext(update, tg, {});
    Object.assign(
        ctx,
        {
            session: {},
            debug: {
                currentScene: '',
                reply: {},
                // replyMessages: () => ctx.debug.replies.map(({ message }) => message),
            },
        },
        contextExtra,
    );

    //  @ts-ignore
    ctx.reply = (message, extra = undefined) => { ctx.debug.reply = { message, extra }; };

    // @ts-ignore
    ctx.scene = {
        // @ts-ignore
        enter: (sceneName) => { ctx.debug.currentScene = sceneName;},
        // @ts-ignore
        leave: () => { ctx.debug.currentScene = ''; },
    };

    // @ts-ignore
    ctx.getChat = () => ({
        id: FakeParams.getId(),
        chatId: FakeParams.getInteger(),
        firstName: FakeParams.getName(),
        lastName: FakeParams.getName(),
    });

    return ctx;
}
