import { BaseDatabase } from "../database/connection"
import { Turma } from "../models/Turma";
import { TurmaDocEst } from "../models/TurmaDocEst";

export class TurmaDataBase extends BaseDatabase {

    public insertTurma = async (turma: Turma) => {
        await this.connection('TURMA')
            .insert({
                id: turma.getId(),
                nome: turma.getName(),
                modulo: turma.getModulo()
            })
    };

    public pegarTurmas = async () => {
        const response = await this.connection('TURMA')
            .select("id", "nome", "modulo")

            if(response.length < 1){
                throw new Error("Erro no resultado!");
            }

        const docentes: any = await this.connection.raw(`
            SELECT * FROM TURMA
            JOIN DOCENTE ON id_docente = DOCENTE.id
            `)

            if(docentes.length < 1){
                throw new Error("Erro no docentes!");
            }

        const estudantes: any = await this.connection.raw(`
            SELECT * FROM TURMA
            JOIN ESTUDANTE ON id_estudante = ESTUDANTE.id
            `)

            if(estudantes.length < 1){
                throw new Error("Erro no estudantes!");
            }

        const result = {
            response,
            docentes,
            estudantes,
        }
        
        console.log(response, docentes, estudantes)

        return docentes
    };
};