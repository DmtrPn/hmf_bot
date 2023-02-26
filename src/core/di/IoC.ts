import { Container } from 'typescript-ioc';

import { IUserCrudService } from '@retreat/domain/user/IUserCrudService';
import { UserCrudService } from '@retreat/infrastructure/user/UserCrudService';

Container.bind(IUserCrudService).to(UserCrudService);
