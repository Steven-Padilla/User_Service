import { DeleteByIdRepositoryImpl } from '../repositoriesImpl/DeleteByIdRepositoryImpl';
import { DeleteUserUseCase } from '../../aplication/usesCases/deleteUserUseCase';
import { DeleteUserController } from '../controllers/deleteUserController';

const deleteByIdRepositoryImpl= new DeleteByIdRepositoryImpl();

//Dependenciy to delete a User
const deleteUserUseCase = new DeleteUserUseCase(deleteByIdRepositoryImpl);
export const deleteUsersController = new DeleteUserController(deleteUserUseCase);