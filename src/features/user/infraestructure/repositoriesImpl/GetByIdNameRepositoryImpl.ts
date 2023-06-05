import { User } from "../../domain/entities/User";
import { GetByIdNameUserRepository } from "../../domain/repositories/GetByIdNameRepository";



export class GetByIdNameRepoSitoryImpl implements GetByIdNameUserRepository {
    async getByIdName(id_name: string): Promise<User | null> {
        const tarjet = await User.findOne({ where: { id_name } });
        return tarjet;
    }
}