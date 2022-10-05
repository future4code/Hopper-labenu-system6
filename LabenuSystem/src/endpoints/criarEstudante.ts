import { Request, Response } from "express";
import { Estudante } from "../models/Estudante";

export const criarEstudante = async (req: Request, res: Response) => {
    let errorCode = 400
    try{
        const nome = req.body.nome
        const email = req.body.email
        const data_nasc = req.body.data_nasc
        // const hobbies = req.body.hobbies - como adicionar um array na tabela de hobbies?
    
        if(!nome || !email || !data_nasc){
            throw new Error("Dados inválidos");
        }
    }
}