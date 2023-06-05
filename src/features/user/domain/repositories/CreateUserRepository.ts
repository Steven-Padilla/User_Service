import { User } from "../entities/User";

export interface CreateUserRepository {
    createUser(name: string, email: string, id_name: string, pasword: string, premium: boolean): Promise<[User, boolean]>;
}