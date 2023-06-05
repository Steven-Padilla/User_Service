import { User } from "../../domain/entities/User";
import { GetAllUserRepository } from "../../domain/repositories/GetAllUsersRepository";

export class GetAllUserRepositoryImpl implements GetAllUserRepository {
    async getAll(): Promise<User[]> {
        const listUsers = await User.findAll();
        return listUsers;
    }
}