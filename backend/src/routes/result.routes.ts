import express from "express"
import { getResult } from "../controllers/result.controller"

const router = express.Router()

router.get("/:studentId", getResult)

export default router