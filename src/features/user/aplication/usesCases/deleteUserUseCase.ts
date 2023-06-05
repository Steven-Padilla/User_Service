import { DeleteByIdRepository } from "../../domain/repositories/DeleteByIdRepository";

export class DeleteUserUseCase {
    constructor (
        readonly deleteByIdRepository:DeleteByIdRepository,
    ){}
    async run(id:number) {
        return await this.deleteByIdRepository.deleteById(id);
      }
}