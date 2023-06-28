import * as express from 'express';
const userRouter = express.Router();

import { createUserController } from './dependencies/CreateUserDependency'
import { getAllUsersController } from './dependencies/GetAllDependency'
// import { getByIdUserController } from './dependencies/GetByIdDependency'
import { deleteUsersController } from './dependencies/DeleteUserDependency'
import { updateUserController } from './dependencies/UpdateUserDependency'
import { getByIdNameUsersController } from './dependencies/GetByIdNameDependency'
import { loginUserController } from './dependencies/LoginUserDependency'




userRouter.get("/users/", getAllUsersController.run.bind(getAllUsersController));
// userRouter.get("/getbyid/:id", getByIdUserController.run.bind(getByIdUserController));
userRouter.get("/users/:id_name", getByIdNameUsersController.run.bind(getByIdNameUsersController));

userRouter.post("/users/", createUserController.run.bind(createUserController));
userRouter.post("/users/login/", loginUserController.run.bind(loginUserController));
userRouter.put("/users/", updateUserController.run.bind(updateUserController));
userRouter.delete("/users/:id", deleteUsersController.run.bind(deleteUsersController));

export { userRouter };