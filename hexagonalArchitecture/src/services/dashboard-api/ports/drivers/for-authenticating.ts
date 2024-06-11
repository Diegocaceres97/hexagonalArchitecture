import { Permissions } from './../../app/schemas/auth';
export interface AuthenticatedUser {
    id: string;
    email: string;
    name: string;
    token: string;
    refreshToken: string;
    permissions?: Permissions;
}

export type User = Pick<AuthenticatedUser, 'email' | 'name'>

export interface ForAuthenticating {
login(email: string, password: string): Promise<AuthenticatedUser>;
register(user: User, Password:string): Promise<AuthenticatedUser>;
}