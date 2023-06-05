

export interface DeleteByIdRepository {
    deleteById(id: number): Promise<string>;
}