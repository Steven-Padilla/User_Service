import { LoginUserRepository } from "../../domain/repositories/LoginUserRepository";
import { User } from "../../domain/entities/User";
import bcrypt from "bcrypt";
const { Op } = require("sequelize");

export class LoginUserRepositoryImpl implements LoginUserRepository {
  async login(password: string, emailOrId_name: string): Promise<boolean> {
    let target = new User();
    const res = await User.findOne({
      where: { 
        [Op.or]:[
            {email: emailOrId_name},
            {id_name: emailOrId_name},
        ]},
    });
    if (res) target = res;

    console.log(target.dataValues);

    if (!target.id_name) return false;
    return bcrypt_compare(password, target.password);
  }
}

const bcrypt_compare = async (password: string, db_password: string) => {
  return await bcrypt.compare(password, db_password);
};
