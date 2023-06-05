import { Request, Response } from "express";

import { GetByIdUserUseCase } from "../../aplication/usesCases/getByIdUserUseCase";

export class GetByIdUserController {
  constructor(readonly getByIdUsersUseCase: GetByIdUserUseCase) { }

  async run(req: Request, res: Response) {
    const { id } = req.params
    const user = await this.getByIdUsersUseCase.run(Number(id));
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({
        "message": "User not found"
      })
    }
  }
}