import { Request, Response } from "express"
import * as studentService from "../services/student.service"

export const createStudent = async (req: Request, res: Response) => {
  const student = await studentService.createStudent(req.body)
  res.json(student)
}

export const getStudents = async (req: Request, res: Response) => {
  const students = await studentService.getStudents()
  res.json(students)
}