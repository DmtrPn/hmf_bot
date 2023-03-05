import { FindCommand } from '@common/infrastructure/FindCommand';
import { NotificationFindOptions } from '@retreat/domain/notification/types';

import { NotificationModel } from './NotificationModel';

export class NotificationFindCommand extends FindCommand<NotificationModel, NotificationFindOptions> {

    private id?: NotificationFindOptions['id'];
    private status?: NotificationFindOptions['status'];

    constructor(options: NotificationFindOptions) {
        super(options, NotificationModel);
    }

    protected override addFilters(): this {
        return this.filterBy('id', this.id)
            .filterBy('status', this.status);
    }
}
