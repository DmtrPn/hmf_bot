import { MethodName, SceneTest } from '@core/test/SceneTest';

import { CreateRetreatScene } from '../../scenes/CreateRetreatScene';
import { SceneName } from '../../types';

@Describe('Create retreat scene')
export class CreateRetreatSceneTest extends SceneTest {

    private scene = new CreateRetreatScene();

    @Test('On enter show back button and welcome message')
    public async retreatCreate(): Promise<any> {
        this.checkMethodMetadata(this.scene.onSceneEnter,  [ { method: MethodName.SceneEnter, args: [] } ]);

        await this.scene.onSceneEnter(this.context as any);

        this.checkReplyMessage('Введите дату начала в формате ДД.ММ.ГГГГ \nПример: 01.08.2034');
        this.checkReplyKeyboard('🔙Вернуться', true);
    }

    @Test('On leave replay with sticker')
    public async leaveTest(): Promise<void> {
        this.checkMethodMetadata(this.scene.onSceneLeave, [{ method: MethodName.SceneLeave, args: [] }]);

        await this.scene.onSceneLeave(this.context);
        this.checkReplyMessage('Bye Bye 👋');
    }

    @Test('Back to main scene')
    public async goBack(): Promise<void> {
        this.checkMethodMetadata(this.scene.goBack, [
            { method: MethodName.Command, args: ['leave'] },
            { method: MethodName.Hears, args: ['🔙Вернуться'] },
        ]);

        await this.scene.goBack(this.context);
        this.checkRedirectToScene(SceneName.Main);
    }

    @Test('Set retreat start date')
    public async setStartDate(): Promise<void> {
        this.checkMethodMetadata(this.scene.setStartDate, [
            { method: MethodName.On, args: ['text'] },
        ]);
        const date = '02.01.2043';
        this.setMessageToContext(date);
        await this.scene.setStartDate(this.context, date);

        this.checkReplyMessage(`${date} придет напонминаие!`);
    }

    @Test('Set wrong start date')
    public async setWrongStartDate(): Promise<void> {
        this.checkMethodMetadata(this.scene.setStartDate, [
            { method: MethodName.On, args: ['text'] },
        ]);

        this.setMessageToContext('13.32.0911');
        await this.scene.setStartDate(this.context, '13.32.0911');

        this.checkReplyMessage('Введите дату начала в формате ДД.ММ.ГГГГ \nПример: 01.08.2034');
    }

    @Test('Set past date')
    public async setPastStartDate(): Promise<void> {
        this.checkMethodMetadata(this.scene.setStartDate, [
            { method: MethodName.On, args: ['text'] },
        ]);

        this.setMessageToContext('01.01.2001');
        await this.scene.setStartDate(this.context, '01.01.2001');

        this.checkReplyMessage('Дата должна быть в будущем');
    }

    @Test('Set string to date')
    public async setStringStartDate(): Promise<void> {
        this.checkMethodMetadata(this.scene.setStartDate, [
            { method: MethodName.On, args: ['text'] },
        ]);

        this.setMessageToContext('asdsadasd');
        await this.scene.setStartDate(this.context, 'asdsadasd');

        this.checkReplyMessage('Введите дату начала в формате ДД.ММ.ГГГГ \nПример: 01.08.2034');
    }

}
