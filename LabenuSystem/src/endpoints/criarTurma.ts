import { Request, Response } from "express"
import { Turma } from "../models/Turma"
import { TurmaDataBase } from "../database/TurmaDataBase"


export const criarTurma = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {

        let { nome, modulo }: any = req.body

            if(!nome){
            errorCode = 404
            throw new Error("Precisa passar nome da turma!");
        }

        const id: any = Date.now()
        let newTurma = new Turma(id, nome, modulo)
        const turmaDB = new TurmaDataBase()
        await turmaDB.insertTurma(newTurma)

        res.status(200).send("Turma Criada!")

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};
