import express from "express"
import { createParent } from "../controllers/parent.controller"

const router = express.Router()

router.post("/", createParent)

export default router