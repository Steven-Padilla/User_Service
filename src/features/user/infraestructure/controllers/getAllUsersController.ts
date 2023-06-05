import { Request, Response } from "express";

import { GetAllUsersUseCase } from "../../aplication/usesCases/getAllUsersUseCase";

export class GetAllUsersController {
  constructor(readonly getAllUsersUseCase: GetAllUsersUseCase) { }

  async run(req: Request, res: Response) {
    const listUsers = await this.getAllUsersUseCase.run();
    return res.status(200).json(listUsers);
  }
}