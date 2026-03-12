import { Request, Response } from "express"
import * as testService from "../services/test.service"

export const getTests = async (req: Request, res: Response) => {
  const tests = await testService.getTests()
  res.json(tests)
}