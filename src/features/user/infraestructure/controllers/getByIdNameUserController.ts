import { Request, Response } from "express";

import { GetByIdNameUserUseCase } from "../../aplication/usesCases/getByIdNameUserUseCase";

export class GetByIdNameUserController {
  constructor(readonly getByNameUsersUseCase: GetByIdNameUserUseCase) { }

  async run(req: Request, res: Response) {
    const { id_name } = req.params
    const user = await this.getByNameUsersUseCase.run(id_name);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({
        "message": "User not found"
      })
    }
  }
}