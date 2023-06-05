import { User } from "../entities/User";

export interface GetByIdUserRepository {
    getById(id: number): Promise<User | null>;
}