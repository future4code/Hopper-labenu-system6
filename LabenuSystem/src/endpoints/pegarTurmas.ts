
import { Request, Response } from "express"
import { getTurma, Turma, TurmaDataBase } from "../models/Turma"
import { Modulo } from "../types"


export const pegarTurma = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {

        const turmaDB = new TurmaDataBase()        
        const result = await turmaDB.getTurma()

        res.status(200).send()

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

