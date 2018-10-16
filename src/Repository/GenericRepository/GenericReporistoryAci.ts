export interface GenericRepositoryAci<T> {
    saveData<T>(data: T);
    getData(criteria: any): Promise<T>;
    deleteData<T>(criteria: any);
    getPaginatedList<T>(searchParams: any);
}