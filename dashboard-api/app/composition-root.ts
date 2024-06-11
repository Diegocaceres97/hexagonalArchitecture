import { ControlAuthenticatorStub } from "../adapters/drivens";
import { RepoQuerierStub } from "../adapters/drivens";
import { AuthenticatorProxyAdapter } from "../adapters/drivers/authenticator-proxy-adapter";
import { DashboardApi } from "./dashboard-api";

const compositionMock = () => {

    const controlAuthenticatorStub = new ControlAuthenticatorStub();
    const repoQuerierStub = new RepoQuerierStub();

    const dashboardApiMock = new DashboardApi(controlAuthenticatorStub, repoQuerierStub);

    const authenticatorProxyAdapter = new AuthenticatorProxyAdapter(dashboardApiMock);

    return {
        authenticatorProxyAdapter,
    }
}

export const { authenticatorProxyAdapter } = compositionMock();

    const registerMock = {
        email: 'john@gmail.com',
        name: 'John',
    }

authenticatorProxyAdapter.login('john@gmail.com', '123456');
authenticatorProxyAdapter.register('john@gmail.com', '123456');