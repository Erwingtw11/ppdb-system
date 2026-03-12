import prisma from "../config/prisma"
import { hashPassword, comparePassword } from "../utils/hash"

export const registerUser = async (data: any) => {
  const hashed = await hashPassword(data.password)

  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashed
    }
  })
}

export const loginUser = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { email }
  })

  if (!user) throw new Error("User tidak ditemukan")

  const match = await comparePassword(password, user.password)

  if (!match) throw new Error("Password salah")

  return user
}