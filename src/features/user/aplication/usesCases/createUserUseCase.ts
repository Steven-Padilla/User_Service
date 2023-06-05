import { CreateUserRepository } from "../../domain/repositories/CreateUserRepository";

export class CreateUserUseCase {
    constructor(
        readonly createUserRepository: CreateUserRepository,
    ) { }
    async run(name: string, email: string, id_name: string, password: string, premium: boolean) {
        return await this.createUserRepository.createUser(name, email, id_name, password, premium);
    }
}