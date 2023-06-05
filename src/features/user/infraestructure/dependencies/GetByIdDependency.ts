import { GetByIdUserController } from '../controllers/getByIdUserController';
import { GetByIdUserUseCase } from '../../aplication/usesCases/getByIdUserUseCase';
import { GetByIdUserRepositoryImpl } from '../repositoriesImpl/GetByIdRepositoryImpl';

//main
const getByIdUserRepositoryImpl = new GetByIdUserRepositoryImpl();

//Dependency to get a User by id
const getByIdUserUseCase = new GetByIdUserUseCase(getByIdUserRepositoryImpl);
export const getByIdUserController = new GetByIdUserController(getByIdUserUseCase)