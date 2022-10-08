import { Request, Response } from "express";
import { DocenteDatabase } from "../database/DocenteDatabase";

export const buscarTodosDocentes =async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const docenteDatabase = new DocenteDatabase()
        const resultado = await docenteDatabase.buscarTodosDocentes()

        res.status(200).send({message:"Todos os docentes", docentes: resultado[0]})
        console.log(resultado)
        
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}