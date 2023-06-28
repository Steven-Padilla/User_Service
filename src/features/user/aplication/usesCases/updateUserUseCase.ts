import { UpdateUserRepository } from "../../domain/repositories/UpdateUserRepository";

export class UpdateUserUseCase {
    constructor(
        readonly updateUserRepository: UpdateUserRepository,
    ) { }
    async run(id_name: string,name: string, email: string,  premium: boolean) {
        return await this.updateUserRepository.updateUser(id_name,name, email,premium);
    }
}