import { GetByIdUserRepository } from '../../domain/repositories/GetByIdUserRepository';
import { User } from '../../domain/entities/User';

export class GetByIdUserRepositoryImpl implements GetByIdUserRepository {
    async getById(id: number): Promise<User | null> {
        const tarjet = await User.findByPk(id);
        return tarjet;
    }
}