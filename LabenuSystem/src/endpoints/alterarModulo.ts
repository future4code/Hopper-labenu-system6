import { Turma } from "../models/Turma"
import { TurmaDataBase} from "../database/TurmaDataBase"
import { Request, Response } from "express";


export const alterarModulo = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {

        let {id, modulo} = req.body
        const turmaDB = new TurmaDataBase()
        let newTurma = new Turma(id, nome: nome, modulo)
        
        await turmaDB.alterModulo(newTurma)

        res.status(200).send("Modulo alterado!")

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};
