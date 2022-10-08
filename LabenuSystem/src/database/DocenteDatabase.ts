import { Docente } from "../models/Docente";
import {BaseDatabase} from  "./BaseDatabase";

export class DocenteDatabase extends BaseDatabase{
    TABLE_NAME = "DOCENTE"


    public async criarDocente (docente: Docente){
        await BaseDatabase.connection.raw(`INSERT INTO ${this.TABLE_NAME} 
        (id, nome, email, data_nasc, turma_id) VALUES(
            '${docente.getId()}', 
            '${docente.getNome()}', 
            '${docente.getEmail()}', 
            '${docente.getData_nasc()}', 
            '${docente.getTurma_id()}');`)    
    }

    public async buscarTodosDocentes(){
        const resultado = await BaseDatabase.connection.raw(`SELECT * FROM ${this.TABLE_NAME};`)
        return resultado
    }
    public async buscarDocente(nome: string){
        const resultado = await BaseDatabase.connection.raw(`SELECT * FROM ${this.TABLE_NAME} WHERE nome LIKE '%${nome}%';`)
        return resultado
    }

    public async mudarDocente(id: string, turma_id: string){
        await BaseDatabase.connection.raw(`UPDATE ${this.TABLE_NAME} SET turma_id = '${turma_id}' WHERE id = '${id}';`)
    }
}
