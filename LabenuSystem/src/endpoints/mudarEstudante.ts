import { Request, Response } from "express";
import { EstudanteDatabase } from "../database/EstudanteDatabase";
import { Estudante } from "../models/Estudante";

export const mudarEstudante =async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        let{id, turma_id} = req.body
        const estudanteDatabase = new EstudanteDatabase()
        const resultado = await estudanteDatabase.mudarEstudante(id, turma_id)

        res.status(200).send({message:"Turma alterada"})
        console.log(resultado)
        
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}