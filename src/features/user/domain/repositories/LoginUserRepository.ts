export interface LoginUserRepository {
    login(password: string, emailOrId_name:string): Promise<Array<any> | undefined >;
}