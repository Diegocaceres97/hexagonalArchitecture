import { User } from "../../repository/app/schemas";
import { ForControlAuthenticating, ForRepoQuerying } from "../ports/drivens";
import { AuthenticatedUser, ForAuthenticating } from "../ports/drivers";

export class DashboardApi implements ForAuthenticating {
    constructor(private readonly authenticator: ForControlAuthenticating,
                private readonly repoQuerier: ForRepoQuerying
    ) {}
    async login(email: string, password: string):Promise<AuthenticatedUser>{
        const authDetails = await this.authenticator.getAuthDetails(email, password);
        const permissions = await this.authenticator.getPermissions(email, password);

        const user = await this.repoQuerier.getUser(email);

        console.log('se logueo user ', user)

        return {
            ...user,
            ...authDetails,
            permissions,
        }
    }
    async register(user: User, Password: string):Promise<AuthenticatedUser>{
        const newUser = await this.repoQuerier.createrUser(user, Password);
        const authDetails = await this.authenticator.getAuthDetails(user.email, Password);
        const permissions = await this.authenticator.getPermissions(user.email, Password);
    
        console.log('se creo user ', newUser)

        return {
            ...newUser,
            ...authDetails,
            permissions,
        }
    }
}