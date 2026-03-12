import express from "express"
import authRoutes from "./auth.routes"
import studentRoutes from "./student.routes"
import parentRoutes from "./parent.routes"
import documentRoutes from "./document.routes"
import testRoutes from "./test.routes"
import answerRoutes from "./answer.routes"
import resultRoutes from "./result.routes"

const router = express.Router()

router.use("/auth", authRoutes)
router.use("/students", studentRoutes)
router.use("/parents", parentRoutes)
router.use("/documents", documentRoutes)
router.use("/tests", testRoutes)
router.use("/answers", answerRoutes)
router.use("/results", resultRoutes)

export default router