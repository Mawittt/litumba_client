import { getIncludeObject } from "./helpers"
import { prisma } from "./prismaClient"

interface CreateInterface {
    firstName: string
    lastName: string
    profileImage: { url: string }
    coverImage: { url: string }
    country: string
    city: string
    profession: string
    description: string
    phone: string
    email: string
    online: boolean
    privacy: {
        phoneOnProfile: boolean
        emailOnProfile: boolean
    }
}

interface UpdateInterface {
    firstName?: string
    lastName?: string
    profileImage?: { url: string }
    coverImage?: { url: string }
    country?: string
    city?: string
    profession?: string
    description?: string
    phone?: string
    email?: string
    online?: boolean
    socketId?: string
    privacy?: {
        phoneOnProfile?: boolean
        emailOnProfile?: boolean
    }
}



export default class UserModel {

    async create(data: CreateInterface) {
        return await prisma.users.create({
            data: data
        })
    }
    async update(userId: string, data: UpdateInterface) {
        return await prisma.users.update({
            where: {
                id: userId
            },
            data: data
        })
    }
    async getOne(userId: string, includes?: ("businesses" | "culturalGroups" | "comments" | "likes" | "notifications" | "notificationsTriggered" | "followers" | "followees" | "posts" | "jobs" | "products" | "services" | "realEstates" | "reviews")[]) {
        const include = includes ? getIncludeObject(includes) : {}
        include._count = true
        return await prisma.users.findUnique({
            where: {
                id: userId
            },
            include: {
                businesses: true,
                ...include,
                _count: true
            }
        })
    }

}