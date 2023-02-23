import { Markup } from 'telegraf';
import { Scene, Hears, Action, SceneEnter, On, Ctx, SceneLeave, Command } from 'nestjs-telegraf';

import { Context } from '@core/types';
import { SceneNames } from '../types';

@Scene(SceneNames.CreateRetreat)
export class CreateRetreatScene {
    @SceneEnter()
    public async onSceneEnter(ctx: Context) {
        await ctx.reply('Начать ретрит', Markup
            .keyboard([['🔙Вернуться']])
            .resize(),
        );
    }

    @SceneLeave()
    public onSceneLeave(): string {
        return 'Bye Bye 👋';
    }

    @Command(['leave'])
    @Hears('🔙Вернуться')
    public async goBack(@Ctx() ctx: Context) {
        await ctx.scene.enter(SceneNames.Main);
    }

    @Action('setStartDate')
    public async setStartDate(@Ctx() ctx: Context) {
        await ctx.reply('👍');
    }

    @On('text')
    public async onText(@Ctx() ctx: Context) {
        await ctx.reply(
            'Жизнь неожиданна прекрасна',
            Markup.inlineKeyboard([
                Markup.button.callback('Выбрать дату начала ретрит', 'setStartDate'),
            ]),
        );
    }
}
