
import { Request, Response } from "express"
import { TurmaDataBase } from "../database/TurmaDataBase"

export const pegarTurma = async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400
    try {

        const turmaDB = new TurmaDataBase()
        const result = turmaDB.pegarTurmas()

        res.status(200).send(result)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};

