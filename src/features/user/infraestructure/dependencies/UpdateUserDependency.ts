import { UpdateUserUseCase } from '../../aplication/usesCases/updateUserUseCase';
import { UpdateUserControllerImpl } from '../repositoriesImpl/UpdateUserRepositoryImpl';
import { UpdateUserController } from '../controllers/updateUserController'

const updateUserControllerImpl = new UpdateUserControllerImpl();

//Dependency to update a User
const updateUserUseCase = new UpdateUserUseCase(updateUserControllerImpl);
export const updateUserController = new UpdateUserController(updateUserUseCase);