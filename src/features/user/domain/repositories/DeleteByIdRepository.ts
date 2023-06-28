

export interface DeleteByIdRepository {
    deleteById(id_name: string): Promise<string>;
}