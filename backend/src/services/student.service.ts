import prisma from "../config/prisma"

export const createStudent = async (data: any) => {
  return prisma.student.create({
    data
  })
}

export const getStudents = async () => {
  return prisma.student.findMany({
    include: {
      parents: true,
      documents: true
    }
  })
}