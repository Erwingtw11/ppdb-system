import prisma from "../config/prisma"

export const submitAnswer = async (data: any) => {
  return prisma.answer.create({
    data
  })
}