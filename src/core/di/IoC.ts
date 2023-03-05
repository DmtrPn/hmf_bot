import { Container } from 'typescript-ioc';

import { IUserCrudService } from '@retreat/domain/user/IUserCrudService';
import { UserCrudService } from '@retreat/infrastructure/user/UserCrudService';
import { IRetreatCrudService } from '@retreat/domain/retreat/IRetreatCrudService';
import { RetreatCrudService } from '@retreat/infrastructure/retreat/RetreatCrudService';

Container.bind(IUserCrudService).to(UserCrudService);
Container.bind(IRetreatCrudService).to(RetreatCrudService);
