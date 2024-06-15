import { User } from "../../app/schemas";

export interface ForManagingUser {
    getUser(email: string): Promise<User>;
    createUser(user: User, Password: string): Promise<User>;
}