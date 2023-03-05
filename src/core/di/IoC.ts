import { Container } from 'typescript-ioc';

import { IUserCrudService } from '@retreat/domain/user/IUserCrudService';
import { UserCrudService } from '@retreat/infrastructure/user/UserCrudService';
import { IRetreatCrudService } from '@retreat/domain/retreat/IRetreatCrudService';
import { RetreatCrudService } from '@retreat/infrastructure/retreat/RetreatCrudService';
import { ITelegrafService } from '@retreat/domain/telegraf/ITelegrafService';
import { TelegrafService } from '@retreat/infrastructure/telegraf/TelegrafService';

Container.bind(IUserCrudService).to(UserCrudService);
Container.bind(IRetreatCrudService).to(RetreatCrudService);
Container.bind(ITelegrafService).to(TelegrafService);
