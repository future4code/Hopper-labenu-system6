import { Request, Response } from "express";
import { EstudanteDatabase } from "../database/EstudanteDatabase";
import { Estudante } from "../models/Estudante";

export const buscarEstudante =async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        let nome = req.params.nome
        const estudanteDatabase = new EstudanteDatabase()
        const resultado = await estudanteDatabase.buscarEstudante(nome)

        res.status(200).send({message:"Aluno encontrado", aluno: resultado[0]})
        console.log(resultado)
        
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}

export const buscarTodosEstudantes =async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const estudanteDatabase = new EstudanteDatabase()
        const resultado = await estudanteDatabase.buscarTodosEstudantes()

        res.status(200).send({message:"Todos os estudantes", alunos: resultado[0]})
        console.log(resultado)
        
    } catch (error) {
        res.status(errorCode).send({message: error.message})
    }
}