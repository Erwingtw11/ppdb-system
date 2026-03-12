import prisma from "../config/prisma"

export const getResult = async (studentId: string) => {
  return prisma.testResult.findUnique({
    where: { student_id: studentId }
  })
}