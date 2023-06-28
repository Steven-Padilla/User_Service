
import { Request, Response } from "express";
import { UpdateUserUseCase } from "../../aplication/usesCases/updateUserUseCase";
import { User } from "../../domain/entities/User";


export class UpdateUserController {
  constructor(readonly updateUserUseCase: UpdateUserUseCase) { }

  async run(req: Request, res: Response) {
    const body = req.body as User;

    const user = await this.updateUserUseCase.run(body.id_name,body.name,body.email, body.premium);
    return res.status(200).json(user);
  }
}