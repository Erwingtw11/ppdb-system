import prisma from "../config/prisma"

export const createParent = async (data: any) => {
  return prisma.parent.create({
    data
  })
}