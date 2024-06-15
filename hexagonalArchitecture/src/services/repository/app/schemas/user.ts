export interface User {
    id: string;
    name: string;
    email:string;
    password: string;
}

export interface RepoUser extends User {
    id: string;
}