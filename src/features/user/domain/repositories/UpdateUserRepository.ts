import { User } from '../../domain/entities/User';

export interface UpdateUserRepository {
    updateUser(id_name: string, name: string, email: string, premium: boolean): Promise<User>;
}