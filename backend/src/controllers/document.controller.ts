import { Request, Response } from "express"
import * as documentService from "../services/document.service"

export const uploadDocument = async (req: Request, res: Response) => {
  const doc = await documentService.uploadDocument(req.body)
  res.json(doc)
}