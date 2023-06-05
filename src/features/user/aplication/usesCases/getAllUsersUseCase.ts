import { GetAllUserRepository } from "../../domain/repositories/GetAllUsersRepository";

export class GetAllUsersUseCase {
    constructor(
        readonly getAllUserRepository: GetAllUserRepository,
    ) { }
    async run() {
        return await this.getAllUserRepository.getAll();
    }
}