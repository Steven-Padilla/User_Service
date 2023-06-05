import { GetAllUserRepositoryImpl } from "../repositoriesImpl/GetAllRepositoryImpl";
import { GetAllUsersUseCase } from '../../aplication/usesCases/getAllUsersUseCase';
import { GetAllUsersController } from '../controllers/getAllUsersController';

//main 
const getAllUserRepositoryImpl = new GetAllUserRepositoryImpl();

//Dependency to get all Users 
const getAllUsersUseCase = new GetAllUsersUseCase(getAllUserRepositoryImpl);
export const getAllUsersController = new GetAllUsersController(getAllUsersUseCase)