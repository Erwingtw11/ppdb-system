import { Request, Response } from "express"
import * as authService from "../services/auth.service"

export const register = async (req: Request, res: Response) => {
  try {
    const user = await authService.registerUser(req.body)
    res.json(user)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

export const login = async (req: Request, res: Response) => {
  try {
    const user = await authService.loginUser(req.body.email, req.body.password)
    res.json(user)
  } catch (error) {
    res.status(400).json({ message: error })
  }
}