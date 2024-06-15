import { LoggerStubAdapter } from "../adapters/drivens";
import { UserManagerProxy } from "../adapters/drivers";
import { Repository } from "./repository";

export const compositionMock = () => {

    const MonitorStub = new LoggerStubAdapter();
    const UserRepositoryMock = new Repository(MonitorStub);

    const userManagerProxy = new UserManagerProxy(UserRepositoryMock);

    return {
        userManagerProxy
    };
}