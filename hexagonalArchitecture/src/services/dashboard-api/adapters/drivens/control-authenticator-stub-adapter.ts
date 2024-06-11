import { AuthDetails, Permissions } from "../../app/schemas";
import { ForControlAuthenticating  } from "../../ports/drivens/for-control-authenticating";

const authDetailsMock: AuthDetails = {
    token: 'token',
    refreshToken: 'refreshToken'
}

const permissionsMock: Permissions = {
    admin: true,
    user: true,
}

export class ControlAuthenticatorStub implements ForControlAuthenticating {
    async getAuthDetails(email: string, password: string): Promise<AuthDetails> {
        return Promise.resolve(authDetailsMock);
    }

    async getPermissions(email: string, password: string): Promise<Permissions> {
        return Promise.resolve(permissionsMock);
    }
}