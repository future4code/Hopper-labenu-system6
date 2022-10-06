import { Request, Response } from "express"
import connection from "../database/connection"
import { insertTurma, Turma } from "../models/Turma"
import { Modulo } from "../types"


export const criarTurma = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {

        let { nome, modulo }: any = req.body

        let docentes: any = await connection.raw(`
        SELECT * FROM labeSystem_turmas
        JOIN id_docentes ON Docentes(id)
        `)
        
        let estudantes: any = await connection.raw(`
        SELECT * FROM labeSystem_turmas
        JOIN id_estudantes ON Estudantes(id)
        `)

        if(!nome){
            errorCode = 404
            throw new Error("Precisa passar nome da turma!");
        }

        if(!modulo){
            modulo = Modulo.ZERO
        }

        const id: any = Date.now()
        let newTurma = new Turma(id, nome, docentes, estudantes, modulo)

        await insertTurma(newTurma)

        res.status(200).send("Turma Criada!")

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}
