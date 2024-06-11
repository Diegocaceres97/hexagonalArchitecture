import { ForRepoQuerying } from "../../ports/drivens";
import { User } from "../../../repository/app/schemas";

const userMock: User = {
    id: 'test',
    email: 'test@test.com',
    name: 'test',
}

export class RepoQuerierStub implements ForRepoQuerying {
    async getUser(email: string): Promise<any> {
        return Promise.resolve(userMock);
    }
    async createrUser(email: any, password: string): Promise<any> {
        return Promise.resolve(userMock);
    }
}