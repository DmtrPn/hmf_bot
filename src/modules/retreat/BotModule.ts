import { Module } from '@nestjs/common';

import { StartScene } from './application/StartScene';
import { CreateRetreatScene } from './application/scenes/CreateRetreatScene';
import { MainScene } from './application/scenes/MainScene';

@Module({
    providers: [StartScene, MainScene, CreateRetreatScene],
})
export class BotModule {}