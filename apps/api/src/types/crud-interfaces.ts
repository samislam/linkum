import { DeleteByIdResponse, UpdateByIdResponse } from './response-templates'
import { FindResponse, CreateResponse, FindByIdResponse } from './response-templates'

export interface CRUDController<T extends object> {
  findRoute(): Promise<FindResponse<T>>
  findByIdRoute(id: string): Promise<FindByIdResponse<T>>
  createRoute(body: object): Promise<CreateResponse<T>>
  updateByIdRoute(id: string, body: object): Promise<UpdateByIdResponse<T>>
  deleteByIdRoute(id: string): Promise<DeleteByIdResponse<T>>
}

export interface CRUDService<T extends object> {
  find(): Promise<FindServiceReturnType<T>>
  findById(id: string): Promise<FindByIdServiceReturnType<T>>
  create(payload: object): Promise<CreateServiceReturnType<T>>
  updateById(id: string, payload: object): Promise<UpdateByIdServiceReturnType<T>>
  deleteById(id: string): Promise<DeleteByIdServiceReturnType<T>>
}

export type FindServiceReturnType<T extends object> = T[]

export type FindByIdServiceReturnType<T extends object> = T | null
export interface CreateServiceReturnType<T extends object> {
  createdItem: T
  createdItemId: string
}
export interface UpdateByIdServiceReturnType<T extends object> {
  previousEntry: T
  newEntry: T
  entryId: string
}
export interface DeleteByIdServiceReturnType<T extends object> {
  deletedItem: T
  deletedItemId: string
}
