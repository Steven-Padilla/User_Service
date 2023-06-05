import { GetByIdNameRepoSitoryImpl } from '../repositoriesImpl/GetByIdNameRepositoryImpl';
import { GetByIdNameUserUseCase } from '../../aplication/usesCases/getByIdNameUserUseCase';
import { GetByIdNameUserController } from '../controllers/getByIdNameUserController';


//main
const getByIdNameRepoSitoryImpl = new GetByIdNameRepoSitoryImpl();

//Dependency to get by name
const getByNameUseCase = new GetByIdNameUserUseCase(getByIdNameRepoSitoryImpl);
export const getByIdNameUsersController = new GetByIdNameUserController(getByNameUseCase);