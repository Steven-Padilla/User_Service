
import { Request, Response } from "express";
import { LoginUserUseCase } from "../../aplication/usesCases/loginUserUseCase";
import { User } from "../../domain/entities/User";


export class LoginUserController {
  constructor(readonly loginUserUseCase: LoginUserUseCase) { }

  async run(req: Request, res: Response) {
    const {email, id_name, password} = req.body as User;
    const emailOrId_name = email ? email : id_name
    const data = await this.loginUserUseCase.run( password, emailOrId_name);
    if (data) return res.status(200).json({
      message:"You are logged in",
      login:true,
      data:data
    });
    return res.status(400).json({
      data:"Data invalid",
      login:false
    });
  }
}