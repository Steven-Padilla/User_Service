
import { Request, Response } from "express";
import { CreateUserUseCase } from "../../aplication/usesCases/createUserUseCase";
import { User } from "../../domain/entities/User";


export class CreateUserController {
  constructor(readonly createUserUseCase: CreateUserUseCase) { }

  async run(req: Request, res: Response) {
    const body = req.body as User;

    const user = await this.createUserUseCase.run(body.name, body.email, body.id_name, body.password, body.premium);
    return res.status(200).json(user);
  }
}