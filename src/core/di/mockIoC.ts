import { Container } from 'typescript-ioc';

import { IUserCrudService } from '@retreat/domain/user/IUserCrudService';
import { MockUserCrudService } from '@retreat/infrastructure/user/mock/MockUserCrudService';
import { IRetreatCrudService } from '@retreat/domain/retreat/IRetreatCrudService';
import { MockRetreatCrudService } from '@retreat/infrastructure/retreat/mock/MockRetreatCrudService';

Container.bind(IUserCrudService).to(MockUserCrudService);
Container.bind(IRetreatCrudService).to(MockRetreatCrudService);
