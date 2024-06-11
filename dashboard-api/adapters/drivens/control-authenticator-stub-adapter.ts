import { AuthDetails, Permissions } from "../../app/schemas";
import { ForControlAuthenticating  } from "../../ports/drivens/for-control-authenticating";

const authDetailsMock: AuthDetails = {
    token: '12312adasda12',
    refreshToken: '12312adasda4112'
}

const permissionsMock: Permissions = {
    admin: true,
    user: false,
}

export class ControlAuthenticatorStub implements ForControlAuthenticating {
    async getAuthDetails(email: string, password: string): Promise<AuthDetails> {
        return Promise.resolve(authDetailsMock);
    }

    async getPermissions(email: string, password: string): Promise<Permissions> {
        return Promise.resolve(permissionsMock);
    }
}