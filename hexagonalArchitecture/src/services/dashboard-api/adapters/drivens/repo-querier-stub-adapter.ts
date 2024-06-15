import { ForRepoQuerying } from "../../ports/drivens";
import { RepoUser } from "../../../repository/app/schemas";

const userMock: RepoUser = {
    id: '123456789',
    email: 'test@test.com',
    name: 'test',
    password: 'password',
}

export class RepoQuerierStub implements ForRepoQuerying {
    async getUser(email: string): Promise<RepoUser> {
        return Promise.resolve(userMock);
    }
    async createrUser(email: any, password: string): Promise<RepoUser> {
        return Promise.resolve(userMock);
    }
}