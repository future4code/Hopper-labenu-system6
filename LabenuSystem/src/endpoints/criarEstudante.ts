import { Request, Response } from "express";
import moment from "moment";
import { EstudanteDatabase } from "../database/EstudanteDatabase";
import { Estudante } from "../models/Estudante";

export const criarEstudante = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        let{nome, email, data_nasc} = req.body
        const id = `${(Math.round((Math.random() * 99)))}`
        const turma_id = '1'


        if(!nome || !email || !data_nasc){
            throw new Error("Dados inválidos")
        }

        const estudanteDatabase = new EstudanteDatabase()

        const dataConvertida = moment(data_nasc,"DD/MM/YYYY").format("YYYY/MM/DD")


        const novoAluno = new Estudante(
            id,
            nome,
            email,
            dataConvertida,
            turma_id
        )

        console.log(novoAluno)
        
        const response = await estudanteDatabase.criarEstudante(novoAluno)

        res.status(201).send({message: "Aluno criado", novoAluno: novoAluno})
        
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}