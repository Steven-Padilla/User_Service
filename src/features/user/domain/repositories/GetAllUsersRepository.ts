import { User } from "../entities/User";

export interface GetAllUserRepository {
    getAll(): Promise<Array<User>>;
}