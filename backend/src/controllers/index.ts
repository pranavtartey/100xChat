import { Request, Response } from "express";

export const test = (req: Request, res: Response) => {
    console.log("This is the test route and everything is working fine!!")
    res.status(200).json({
        message: "Everything is wroking fine in this app!!"
    })
    return
}