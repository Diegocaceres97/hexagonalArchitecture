import { ControlAuthenticatorStub } from './../adapters/drivens/control-authenticator-stub-adapter';
import { describe, it, expect } from 'vitest'
import { RepoQuerierStub } from './../adapters/drivens/repo-querier-stub-adapter';
import { DashboardApi } from './dashboard-api';
import { AuthenticatedUser } from './schemas';

describe('Dashboard API', () => {
    const controlAuthenticatorStub = new ControlAuthenticatorStub();
    const repoQuerierStub = new RepoQuerierStub();

    const dashboardApiMock = new DashboardApi(controlAuthenticatorStub, repoQuerierStub);

    it.concurrent('should login', async () => {
        //GIVEN
        const mockedParams = {
            email: 'test@test.com',
            password: 'test'
        }

        const expectedResult: AuthenticatedUser= {
            id: "123456789",
            email: 'test@test.com',
            name: 'test',
            token: 'token',
            refreshToken: 'refreshToken',
            permissions: {
                admin: true,
                user: true
            }
        }

        //WHEN
        const result = await dashboardApiMock.login(mockedParams.email, mockedParams.password);

        //THEN
        expect(result).toEqual(expectedResult);
    });

});