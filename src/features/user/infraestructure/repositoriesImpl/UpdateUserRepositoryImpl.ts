import { UpdateUserRepository } from '../../domain/repositories/UpdateUserRepository';
import { User } from '../../domain/entities/User';

export class UpdateUserControllerImpl implements UpdateUserRepository {
    async updateUser(id: number, name: string, email: string, id_name: string, premium: boolean): Promise<User> {
        const user = await User.findByPk(id);

        if (user) {
            await user.update({
                name,
                email,
                id_name,
                premium
            })
            return user;
        } else {
            return new User()
        }

    }
}