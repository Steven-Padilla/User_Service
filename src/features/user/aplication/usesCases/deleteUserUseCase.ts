import { DeleteByIdRepository } from "../../domain/repositories/DeleteByIdRepository";

export class DeleteUserUseCase {
    constructor (
        readonly deleteByIdRepository:DeleteByIdRepository,
    ){}
    async run(id_name:string) {
        return await this.deleteByIdRepository.deleteById(id_name);
      }
}