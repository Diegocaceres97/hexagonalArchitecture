import { RepoUser } from "../../../repository/app/schemas";
import { User as UserFromRepo } from "../../../repository/app/schemas";

export interface ForRepoQuerying {
    getUser(email:string): Promise<RepoUser>;
    createrUser(email:UserFromRepo, password: string): Promise<RepoUser>
}