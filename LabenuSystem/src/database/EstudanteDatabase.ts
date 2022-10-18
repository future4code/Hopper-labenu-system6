import { Estudante } from "../models/Estudante";
import {BaseDatabase} from  "./BaseDatabase";

export class EstudanteDatabase extends BaseDatabase{
    TABLE_NAME = "ESTUDANTE"


    public async criarEstudante (estudante: Estudante){
        await BaseDatabase.connection.raw(`INSERT INTO ${this.TABLE_NAME} 
        (id, nome, email, data_nasc, turma_id) VALUES(
            '${estudante.getId()}', 
            '${estudante.getNome()}', 
            '${estudante.getEmail()}', 
            '${estudante.getData_nasc()}', 
            '${estudante.getTurma_id()}');`)    
    }

    public async buscarTodosEstudantes(){
        const resultado = await BaseDatabase.connection.raw(`SELECT * FROM ${this.TABLE_NAME};`)
        return resultado
    }
    public async buscarEstudante(nome: string){
        const resultado = await BaseDatabase.connection.raw(`SELECT * FROM ${this.TABLE_NAME} WHERE nome LIKE '%${nome}%';`)
        return resultado
    }

    public async mudarEstudante (id: string, turma_id: string){
        await BaseDatabase.connection.raw(`UPDATE ${this.TABLE_NAME} SET turma_id = '${turma_id}' WHERE id = '${id}';`)
    }
}
