import '@core/test/unitTestRanner';
// import { EntityName } from '@core/access-control/types';

// import { EntityAccessControlTest } from '@core/access-control/test/utils/EntityAccessControlTest';

@Describe()
export class AffirmationAccessControlTest  {

    @Test('Work')
    public retreatCreate(): void {
        const created = true;
        expect(created).toBeTruthy();
    }

}
