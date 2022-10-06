import { Request, Response } from "express";
import { EstudanteDatabase } from "../database/EstudanteDatabase";
import { Estudante } from "../models/Estudante";

export const criarEstudante = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        let{nome, email, data_nasc} = req.body
        const id = "a"
        const turma_id = "a"
        const hobbies = "a"
        const dataNasc = new Date(data_nasc)
        
        

        if(!nome || !email || !data_nasc){
            throw new Error("Dados inválidos")
        }

        const novoAluno = new Estudante(
            id,
            nome,
            email,
            data_nasc.split("/").reverse().join("/"),
            turma_id,
            hobbies
        )

        const estudanteDatabase = new EstudanteDatabase()
        await estudanteDatabase.create(novoAluno)

        res.status(201).send({message: "Aluno criado", novoAluno: novoAluno})
        
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}