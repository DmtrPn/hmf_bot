import { Markup } from 'telegraf';
import { Scene, Hears, SceneEnter, Action, On, Ctx, SceneLeave } from 'nestjs-telegraf';
import { SceneNames } from '../types';
import { Context } from '@core/types';

@Scene(SceneNames.Main)
export class MainScene {
    @SceneEnter()
    public async onSceneEnter(ctx: Context) {
        await ctx.reply(
            'Добро пожаловать',
            Markup.keyboard([['🌺Начать ретрит']]).resize(),
        );
    }

    @SceneLeave()
    public async onSceneLeave(@Ctx() ctx: Context) {
        await ctx.reply('👋');
    }

    @On('sticker')
    public async on(@Ctx() ctx: Context) {
        await ctx.reply('👍');
    }

    @Action('startRetreat')
    @Hears('🌺Начать ретрит')
    public async hears(@Ctx() ctx: Context) {
        await ctx.scene.enter(SceneNames.CreateRetreat);
    }

    @On('text')
    public async onText(@Ctx() ctx: Context) {
        await ctx.reply(
            'Жизнь неожиданна прекрасна',
            Markup.inlineKeyboard([
                Markup.button.callback('🌺Начать ретрит', 'startRetreat'),
            ]),
        );
    }
}
