import { User } from "../../../repository/app/schemas";
import { User as UserFromRepo } from "../../../repository/app/schemas";

export interface ForRepoQuerying {
    getUser(email:string): Promise<User>;
    createrUser(email:UserFromRepo, password: string): Promise<User>
}