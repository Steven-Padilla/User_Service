import { CreateUserRepository } from '../../domain/repositories/CreateUserRepository';
import { User } from '../../domain/entities/User';
import { bcrypt_config } from '../../../../config';
import bcrypt from "bcrypt";

export class CreateUserRepositoryImpl implements CreateUserRepository {
    async createUser(name: string, email: string, id_name: string, password: string, premium: boolean): Promise<[User, boolean]> {
        const user = new User({ name, email, id_name, password, premium });
        const values = user.dataValues
        const crypted_password=password_bcrypt(values.password);
        const response = await User.findOrCreate({
            where: { id_name, email },
            defaults: {
                name: values.name,
                id_name: values.id_name,
                email: values.email,
                password: crypted_password,
                premium: values.premium
            }
        })
        return response;
    }
}

const password_bcrypt = (password:string) => {
    const {bcrypt_salt}=bcrypt_config;
    return bcrypt.hashSync(password,Number(bcrypt_salt));
}