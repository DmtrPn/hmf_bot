import { Container } from 'typescript-ioc';

import { IUserCrudService } from '@retreat/domain/user/IUserCrudService';
import { MockUserCrudService } from '@retreat/infrastructure/user/mock/MockUserCrudService';

Container.bind(IUserCrudService).to(MockUserCrudService);
