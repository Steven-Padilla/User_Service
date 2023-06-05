import { DeleteByIdRepository } from "../../domain/repositories/DeleteByIdRepository";
import { User } from "../../domain/entities/User";

export class DeleteByIdRepositoryImpl implements DeleteByIdRepository {
    async deleteById(id: number): Promise<string> {
        const tarjet = await User.findByPk(id);
        if (tarjet) {
            const { name } = tarjet
            await tarjet.destroy();
            return `User with name: <${name}> successfully deleted`
        } else {
            return `User with id: ${id} not found`;
        }
    }
}