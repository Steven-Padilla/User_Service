import { UpdateUserRepository } from '../../domain/repositories/UpdateUserRepository';
import { User } from '../../domain/entities/User';

export class UpdateUserControllerImpl implements UpdateUserRepository {
    async updateUser(id_name: string,name: string, email: string, premium: boolean): Promise<User> {
        const user = await User.findOne({
            where:{id_name}
        });

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