import { FindCommand } from '@common/infrastructure/FindCommand';
import { RetreatFindOptions } from '@retreat/domain/retreat/types';

import { RetreatModel } from './RetreatModel';

export class RetreatFindCommand extends FindCommand<RetreatModel, RetreatFindOptions> {

    private id?: RetreatFindOptions['id'];
    private userId?: RetreatFindOptions['userId'];

    constructor(options: RetreatFindOptions) {
        super(options, RetreatModel);
    }

    protected override addFilters(): this {
        return this.filterBy('id', this.id)
            .filterBy('userId', this.userId);
    }
}
