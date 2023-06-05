import { User } from "../entities/User";


export interface GetByIdNameUserRepository {
    getByIdName(id_name: string): Promise<User | null>;
}