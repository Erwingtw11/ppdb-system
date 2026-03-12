import { Request, Response } from "express"
import * as resultService from "../services/result.service"

export const getResult = async (req: Request, res: Response) => {
  const result = await resultService.getResult(req.params.studentId)
  res.json(result)
}