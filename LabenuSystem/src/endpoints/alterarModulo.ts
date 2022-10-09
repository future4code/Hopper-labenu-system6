import { Turma } from "../models/Turma"
import { TurmaDataBase} from "../database/TurmaDataBase"
import { Request, Response } from "express";


export const alterarModulo = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {

        let {id, modulo} = req.body

        if(!id || !modulo){
            errorCode = 404
            throw new Error("Precisa indicar id da turma e modulo para alterar!");
        }
        
        const turmaDB = new TurmaDataBase()
                                
        await turmaDB.alterModulo(modulo, id)

        res.status(200).send(`Modulo alterado para ${modulo}!`)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};
