import { GetByIdUserRepository } from "../../domain/repositories/GetByIdUserRepository";

export class GetByIdUserUseCase {
    constructor (
        readonly getByIdUserRepository: GetByIdUserRepository,
    ){}
    async run(id:number) {
        return await this.getByIdUserRepository.getById(id);
      }
}