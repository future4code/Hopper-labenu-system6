import { Request, Response } from "express";
import moment from "moment";
import { DocenteDatabase } from "../database/DocenteDatabase";
import { Docente } from "../models/Docente"; 

export const criarDocente = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        let{nome, email, data_nasc, turma_id} = req.body
        

        if(!nome || !email || !data_nasc || !turma_id){
            throw new Error("Dados inválidos")
        }

        const docenteDatabase = new DocenteDatabase()

        const dataConvertida = moment(data_nasc,"DD/MM/YYYY").format("YYYY/MM/DD")


        const novoDocente = new Docente(
            Date.now().toString(),
            nome,
            email,
            dataConvertida,
            turma_id,
        )
        
        const response = await docenteDatabase.criarDocente(novoDocente)

        res.status(201).send({message: "Docente criado", novoDocente: novoDocente})
        
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}