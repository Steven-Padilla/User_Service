import { GetByIdNameUserRepository } from "../../domain/repositories/GetByIdNameRepository";

export class GetByIdNameUserUseCase {
    constructor (
        readonly getByIdNameUserRepository: GetByIdNameUserRepository,
    ){}
    async run(id_name:string) {
        return await this.getByIdNameUserRepository.getByIdName(id_name);
      }
}