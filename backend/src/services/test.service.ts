import prisma from "../config/prisma"

export const getTests = async () => {
  return prisma.test.findMany()
}