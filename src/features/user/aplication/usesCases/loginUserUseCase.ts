import { LoginUserRepository } from "../../domain/repositories/LoginUserRepository";

export class LoginUserUseCase {
    constructor(
        readonly loginUserRepository: LoginUserRepository,
    ) { }
    async run(password: string,emailOrId_name:string) {
        return await this.loginUserRepository.login(password,emailOrId_name);
    }
}