import { Markup } from 'telegraf';
import { Scene, Hears, SceneEnter, Ctx, On, SceneLeave, Command, Message } from 'nestjs-telegraf';

import { Context } from '@core/types';
import { SceneName } from '../types';
import { DateFormat, DateHelper } from '@utils/DateHelper';

@Scene(SceneName.CreateRetreat)
export class CreateRetreatScene {
    @SceneEnter()
    public async onSceneEnter(ctx: Context) {
        await ctx.reply(
            'Введите дату начала в формате ДД.ММ.ГГГГ \nПример: 01.08.2034',
            Markup.keyboard([['🔙Вернуться']]).resize(),
        );
    }

    @SceneLeave()
    public async onSceneLeave(@Ctx() ctx: Context) {
        await ctx.reply('Bye Bye 👋');
    }

    @Command('leave')
    @Hears('🔙Вернуться')
    public async goBack(@Ctx() ctx: Context) {
        await ctx.scene.enter(SceneName.Main);
    }

    @On('text')
    public async setStartDate(@Ctx() ctx: Context, @Message('text') reversedText: string) {
        const result = DateHelper.createDate(reversedText, DateFormat.DateWithDotSeparator);

        if (result.toString() === 'Invalid Date') {
            await ctx.reply('Введите дату начала в формате ДД.ММ.ГГГГ \nПример: 01.08.2034');
        } else if (DateHelper.isBefore(result, new Date())) {
            await ctx.reply('Дата должна быть в будущем');
        } else {
            await ctx.reply(`${reversedText} придет напонминаие!`);
        }
    }
}
