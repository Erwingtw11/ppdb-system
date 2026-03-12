import { Request, Response } from "express"
import * as parentService from "../services/parent.service"

export const createParent = async (req: Request, res: Response) => {
    const parent = await parentService.createParent(req.body)
    res.json(parent)
}