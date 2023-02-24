import { makeMockContext } from './mockContext';
import { ReplyKeyboardMarkup } from './types';

interface ListenerMetadata {
    method: MethodName;
    args: string[];
}

export enum MethodName {
    On = 'on',
    Command = 'command',
    Hears = 'hears',
    Action = 'action',
    SceneLeave = 'leave',
    SceneEnter = 'enter',
}

export abstract class SceneTest {
    protected context = makeMockContext();

    @BeforeEach()
    public async beforeEach() {
        this.context = makeMockContext();

    }

    protected checkMethodMetadata(target: object, metadata: ListenerMetadata[]): void {
        expect(Reflect.getMetadata('LISTENERS_METADATA', target)).toStrictEqual(metadata);
    }

    protected checkReplyMessage(message: string): void {
        expect(this.context.debug.reply.message).toBe(message);
    }

    protected checkReplyKeyboard(keyboard: string, resize?: boolean): void {
        expect(this.context.debug.reply.extra).toBeDefined();

        // eslint-disable-next-line
        const reply_markup = this.context.debug.reply.extra!.reply_markup as ReplyKeyboardMarkup;

        expect(reply_markup).toBeDefined();
        expect(reply_markup.keyboard[0][0]).toBe(keyboard);
        expect(reply_markup.resize_keyboard).toBe(resize);
    }
}
