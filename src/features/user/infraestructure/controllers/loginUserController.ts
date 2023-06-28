
import { Request, Response } from "express";
import { LoginUserUseCase } from "../../aplication/usesCases/loginUserUseCase";
import { User } from "../../domain/entities/User";


export class LoginUserController {
  constructor(readonly loginUserUseCase: LoginUserUseCase) { }

  async run(req: Request, res: Response) {
    const {email, id_name, password} = req.body as User;
    const emailOrId_name = email ? email : id_name
    const data = await this.loginUserUseCase.run( password, emailOrId_name);
    if (data[1]) return res.status(200).json({
      data:data[0],
      login:data[1],
      message:"You are logged in"
    });
    return res.status(400).json({
      data:"Data invalid",
      login:data[1]
    });
  }
}