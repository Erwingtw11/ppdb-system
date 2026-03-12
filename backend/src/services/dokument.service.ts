import prisma from "../config/prisma"

export const uploadDocument = async (data:any) => {
    return prisma.document.create({
        data
    })
}