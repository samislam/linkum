import { DeleteByIdResponse, UpdateByIdResponse } from './response-templates'
import { FindResponse, CreateResponse, FindByIdResponse } from './response-templates'

export interface CRUDController<T extends object> {
  findRoute(...args: any[]): Promise<FindResponse<T>>
  findByIdRoute(id: string, ...args: any[]): Promise<FindByIdResponse<T>>
  createRoute(body: object, ...args: any[]): Promise<CreateResponse<T>>
  updateByIdRoute(id: string, body: object, ...args: any[]): Promise<UpdateByIdResponse<T>>
  deleteByIdRoute(id: string, ...args: any[]): Promise<DeleteByIdResponse<T>>
}

export interface CRUDService<T extends object> {
  find(...args: any[]): Promise<FindServiceReturnType<T>>
  findById(id: string, ...args: any[]): Promise<FindByIdServiceReturnType<T>>
  create(payload: object, ...args: any[]): Promise<CreateServiceReturnType<T>>
  updateById(id: string, payload: object, ...args: any[]): Promise<UpdateByIdServiceReturnType<T>>
  deleteById(id: string, ...args: any[]): Promise<DeleteByIdServiceReturnType<T>>
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
