import { Request, Response } from "express"
import * as answerService from "../services/answer.service"

export const submitAnswer = async (req: Request, res: Response) => {
  const answer = await answerService.submitAnswer(req.body)
  res.json(answer)
}