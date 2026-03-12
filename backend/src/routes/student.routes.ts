import express from "express"
import { createStudent, getStudents } from "../controllers/student.controller"

const router = express.Router()

router.post("/", createStudent)
router.get("/", getStudents)

export default router