import { DeleteByIdRepository } from "../../domain/repositories/DeleteByIdRepository";
import { User } from "../../domain/entities/User";

export class DeleteByIdRepositoryImpl implements DeleteByIdRepository {
    async deleteById(id_name: string): Promise<string> {
        const tarjet = await User.findOne({
            where:{id_name}
        });
        if (tarjet) {
            const { name } = tarjet
            await tarjet.destroy();
            return `User with name: <${name}> successfully deleted`
        } else {
            return `User with id: ${id_name} not found`;
        }
    }
}