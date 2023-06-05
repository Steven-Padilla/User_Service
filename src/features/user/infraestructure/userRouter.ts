import * as express from 'express';
const userRouter = express.Router();

import { createUserController } from './dependencies/CreateUserDependency'
import { getAllUsersController } from './dependencies/GetAllDependency'
import { getByIdUserController } from './dependencies/GetByIdDependency'
import { deleteUsersController } from './dependencies/DeleteUserDependency'
import { updateUserController } from './dependencies/UpdateUserDependency'
import { getByIdNameUsersController } from './dependencies/GetByIdNameDependency'




userRouter.get("/getall/", getAllUsersController.run.bind(getAllUsersController));
userRouter.get("/getbyid/:id", getByIdUserController.run.bind(getByIdUserController));
userRouter.get("/getbyidname/:id_name", getByIdNameUsersController.run.bind(getByIdNameUsersController));

userRouter.post("/create/", createUserController.run.bind(createUserController));
userRouter.post("/update/", updateUserController.run.bind(updateUserController));
userRouter.delete("/delete/:id", deleteUsersController.run.bind(deleteUsersController));

export { userRouter };