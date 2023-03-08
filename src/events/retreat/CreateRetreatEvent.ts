import { RetreatCreateData } from '@retreat/domain/retreat/types';

import { DomainEvent } from '../abstract/DomainEvent';

export interface CreateRetreatEventPayload extends RetreatCreateData {}

export class CreateRetreatEvent extends DomainEvent<CreateRetreatEventPayload> {
    public static Name = 'retreat.created';
}
