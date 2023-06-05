import { UpdateUserRepository } from "../../domain/repositories/UpdateUserRepository";

export class UpdateUserUseCase {
    constructor(
        readonly updateUserRepository: UpdateUserRepository,
    ) { }
    async run(id: number, name: string, email: string, id_name: string,  premium: boolean) {
        return await this.updateUserRepository.updateUser(id, name, email, id_name,  premium);
    }
}