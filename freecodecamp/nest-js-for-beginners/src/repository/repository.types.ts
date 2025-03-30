export interface DbRepository<T> {
  getAll(): Promise<T[]>;
  getById(id: number): Promise<T | null>;
  create(data: Partial<T>): Promise<T>;
  update(id: number | string, data: Partial<T>): Promise<T>;
  delete(id: number | string): Promise<T>;
}
