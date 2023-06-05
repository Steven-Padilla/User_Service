import { User } from '../../domain/entities/User';

export interface UpdateUserRepository {
    updateUser(id: number, name: string, email: string, id_name: string, premium: boolean): Promise<User>;
}