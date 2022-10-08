import { Request, Response } from "express";
import { DocenteDatabase } from "../database/DocenteDatabase";
import { Docente } from "../models/Docente";

export const mudarDocente =async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        let{id, turma_id} = req.body
        const docenteDatabase = new DocenteDatabase()
        const resultado = await docenteDatabase.mudarDocente(id, turma_id)

        res.status(200).send({message:"Turma alterada"})
        console.log(resultado)
        
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}