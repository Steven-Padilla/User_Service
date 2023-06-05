import { CreateUserRepositoryImpl } from "../repositoriesImpl/CreateRepositoryImpl";
import { CreateUserUseCase } from '../../aplication/usesCases/createUserUseCase';
import { CreateUserController } from '../controllers/CreateUserController';

//main 
const createUserRepositoryImpl = new CreateUserRepositoryImpl();

//Dependency to create a User
const createUserUseCase = new CreateUserUseCase(createUserRepositoryImpl);
export const createUserController = new CreateUserController(createUserUseCase)