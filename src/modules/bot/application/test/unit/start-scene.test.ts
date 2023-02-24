import { MethodName, SceneTest } from '@core/test/SceneTest';

import { StartScene } from '../../StartScene';
import { SceneName } from '../../types';

@Describe('Start scene')
export class StartSceneTest extends SceneTest {

    private scene = new StartScene();

    @Test('On start redirect to main scene')
    public async retreatCreate(): Promise<any> {
        this.checkMethodMetadata(this.scene.start,  [ { method: MethodName.Start, args: [] } ]);

        await this.scene.start(this.context as any);

        this.checkEmptyReply();
        this.checkRedirectToScene(SceneName.Main);
    }

    @Test('On help redirect to main scene')
    public async helpRedirectToMainScene(): Promise<any> {
        this.checkMethodMetadata(this.scene.help,  [ { method: MethodName.Help, args: [] } ]);

        await this.scene.help(this.context as any);

        this.checkEmptyReply();
        this.checkRedirectToScene(SceneName.Main);
    }

    @Test('On help redirect to main scene')
    public async yextRedirectToMain(): Promise<any> {
        this.checkMethodMetadata(this.scene.onText,  [
            { method: MethodName.On, args: [['text', 'sticker', 'message']] },
        ]);

        await this.scene.onText(this.context as any);

        this.checkEmptyReply();
        this.checkRedirectToScene(SceneName.Main);
    }

}
