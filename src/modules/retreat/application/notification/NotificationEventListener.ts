import { Inject } from 'typescript-ioc';

import { CreateRetreatEvent } from '@events/retreat/CreateRetreatEvent';
import { IEventEmitter } from '@events/EventEmitter';

export class NotificationEventListener {
    @Inject protected eventEmitter!: IEventEmitter;
    constructor() {
        console.log('Addd event liserer');
        this.eventEmitter.addListener(CreateRetreatEvent.Name, this.onCreateRetreat);
    }

    public async onCreateRetreat(event: CreateRetreatEvent): Promise<void> {
        console.log('create retrreat event', event);
    }
}
