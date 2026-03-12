import express from "express"
import { submitAnswer } from "../controllers/answer.controller"

const router = express.Router()

router.post("/", submitAnswer)

export default router