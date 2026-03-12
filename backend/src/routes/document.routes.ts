import express from "express"
import { uploadDocument } from "../controllers/document.controller"

const router = express.Router()

router.post("/", uploadDocument)

export default router