import { Permissions } from './auth';
export interface AuthenticatedUser {
  id: string;
  email: string;
  name: string;
  token: string;
  refreshToken: string;
  permissions?: Permissions
  password?: string;
}

export type User = Pick<AuthenticatedUser,  'email' | 'name' >;
