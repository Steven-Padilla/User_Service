import { LoginUserRepository } from "../../domain/repositories/LoginUserRepository";
import { User } from "../../domain/entities/User";
import bcrypt from "bcrypt";
import  {Op } from "sequelize";

export class LoginUserRepositoryImpl implements LoginUserRepository {
  async login(password: string, emailOrId_name: string): Promise<Array<any> | undefined> {
    let target = new User();
    const res = await User.findOne({
      where: { 
        [Op.or]:[
            {email: emailOrId_name},
            {id_name: emailOrId_name},
        ]},
    });
    if (res) target = res;
    if (!target.id_name) return undefined;
    const isLogged= await bcrypt_compare(password, target.password);
    if (isLogged) return [target.name, target.id_name, target.email];
    return undefined;
  }
}

const bcrypt_compare = async (password: string, db_password: string) => {
  return await bcrypt.compare(password, db_password);
};
