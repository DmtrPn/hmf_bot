import { Module } from '@nestjs/common';

import { StartScene } from './application/StartScene';
import { CreateRetreatScene } from './application/scenes/CreateRetreatScene';
import { MainScene } from './application/scenes/MainScene';
import { RetreatScheduler } from './application/scheduller/RetreatScheduler';

@Module({
    providers: [StartScene, MainScene, CreateRetreatScene, RetreatScheduler],
})
export class BotModule {}