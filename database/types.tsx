import { Comments, Posts } from "@prisma/client"

export interface Model {
    create(data: object): Promise<any>,
    update(id: string, data: object): Promise<any>,
    setSearch(query: string | object): any,
    setFilter(query: string | object): any
}

export interface Post extends Model {
    getFeed(id?: any): Promise<Posts[]>,
}