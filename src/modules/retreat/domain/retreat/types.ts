import { BaseFindOptions } from '@common/domain/types';

export interface RetreatFindOptions extends BaseFindOptions {
    userId?: string;
}

export interface RetreatCreateData {
    id: string;
    userId: string;
    startDate: Date;
}

export interface RetreatUpdateData {
    startDate: Date;
}
