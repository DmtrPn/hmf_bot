import { TelegrafModule } from 'nestjs-telegraf';
import { Module } from '@nestjs/common';
import { session } from 'telegraf';

export const sessionMiddleware = session();

import { BotModule } from '@bot/BotModule';

@Module({
    imports: [
        TelegrafModule.forRoot({
            token: process.env.TB_TOKEN,
            middlewares: [sessionMiddleware],
            include: [BotModule],
            launchOptions: process.env.DOBRO_ENV !== 'dev'
                ? {
                    webhook: {
                        domain: `${process.env.TB_WEBHOOK_URL}`,
                        hookPath: `/${process.env.TB_WEBHOOK_SECRET}`,
                    },
                }
                : undefined,
        }),
        BotModule,
    ],
    providers: [],
})
export class BotAppModule {}
