import { LoginUserRepositoryImpl } from "../repositoriesImpl/LoginRepositoryImpl";
import { LoginUserUseCase } from '../../aplication/usesCases/loginUserUseCase';
import { LoginUserController } from '../controllers/loginUserController';

//main 
const loginUserRepositoryImpl = new LoginUserRepositoryImpl();

//Dependency to create a User
const loginUserUseCase = new LoginUserUseCase(loginUserRepositoryImpl);
export const loginUserController = new LoginUserController(loginUserUseCase)