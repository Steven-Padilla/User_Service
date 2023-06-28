import { User } from '../../domain/entities/User';
export interface LoginUserRepository {
    login(password: string, emailOrId_name:string): Promise<[User,boolean]>;
}