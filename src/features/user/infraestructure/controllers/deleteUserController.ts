import { Request, Response } from "express";

import { DeleteUserUseCase } from "../../aplication/usesCases/deleteUserUseCase";

export class DeleteUserController {
  constructor(readonly deleteUsersUseCase: DeleteUserUseCase) { }

  async run(req: Request, res: Response) {
    const { id } = req.params
    const user = await this.deleteUsersUseCase.run(id);
    return res.status(200).json(user);
  }
}