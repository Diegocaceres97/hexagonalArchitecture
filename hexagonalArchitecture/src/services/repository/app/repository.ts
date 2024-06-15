import { ForMonitoring } from "../ports/drivens";
import { ForManagingUser } from "../ports/drivers";
import { RepoUser, User } from "./schemas";

export class Repository implements ForManagingUser {

    private userList: RepoUser[] = [];

    constructor(private readonly logger: ForMonitoring){}

    async getUser(email: string): Promise<RepoUser> {
        const user = this.userList.find((user) => user.email === email); 
        if(!user) {
            this.logger.log("User not found", email);
            throw new Error("User not found");
        }

        return user;
    }

    async createUser(user: User, password: string): Promise<RepoUser> {
        const userExists = this.userList.find((user) => user.email === user.email);
        if(userExists) {
            this.logger.log("User already exists", user.email);
            throw new Error("User already exists");
        }
        const newUser = {
            ...user,
            password,
            id: String(this.userList.length + 1)
        }

        this.userList.push(newUser);
        return newUser;
    }
    
}