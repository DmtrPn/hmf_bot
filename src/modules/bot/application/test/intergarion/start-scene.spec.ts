import { MethodName, SceneTest } from '@core/test/SceneTest';

import { MainScene } from '../../scenes/MainScene';

@Describe()
export class StartSceneSpec extends SceneTest {

    private mainScene = new MainScene();

    @Test('Работает создание ретрита')
    public async retreatCreate(): Promise<any> {

        this.checkMethodMetadata(this.mainScene.onSceneEnter,  [ { method: MethodName.SceneEnter, args: [] } ]);

        await this.mainScene.onSceneEnter(this.context as any);

        this.checkReplyMessage('Добро пожаловать');
        this.checkReplyKeyboard('🌺Начать ретрит', true);
    }

}
