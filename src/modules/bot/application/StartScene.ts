import { Ctx, Help, Start, On, Update } from 'nestjs-telegraf';

import { BotAuditEventType, botAuditLogService } from '@components/auditLog/BotAuditLogService';
import { Context } from '@core/types';

import { SceneName } from './types';

@Update()
export class StartScene {

    @Start()
    public async start(@Ctx() ctx: Context) {
        this.logEvent(ctx, BotAuditEventType.Start);
        await ctx.scene.enter(SceneName.Main);
    }

    @Help()
    public async help(@Ctx() ctx: Context) {
        await ctx.scene.enter(SceneName.Main);
    }

    @On(['text', 'sticker', 'message'])
    public async onText(@Ctx() ctx: Context) {
        await ctx.scene.enter(SceneName.Main);
    }

    private logEvent(ctx: Context, eventType: BotAuditEventType, data: object = {}): void {
        const from = ctx.message?.from ?? ctx.callbackQuery?.from;

        if (from) {
            botAuditLogService.logEvent({
                eventType,
                userId: `${from.id}`,
                data: {
                    ...data,
                    username: from.username,
                    firstName: from.first_name,
                },
            });
        }
    }
}