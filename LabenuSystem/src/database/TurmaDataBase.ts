import { BaseDatabase } from "./BaseDatabase"
import { Turma } from "../models/Turma";

export class TurmaDataBase extends BaseDatabase {
    TABLE_NAME = "TURMA"

    public insertTurma = async (turma: Turma) => {
        await BaseDatabase.connection('TURMA')
            .insert({
                id: turma.getId(),
                nome: turma.getName(),
                modulo: turma.getModulo()
            })
    };

    public pegarTurmas: any = async () => {
        const response = await BaseDatabase.connection('TURMA')
            .select('*')

        return response
    };

    public docentes: any = async (id: string) => {
       const result = await BaseDatabase.connection.raw(`
        SELECT DOCENTE.id, DOCENTE.turma_id FROM DOCENTE
        `)

        return result[0]
    };

    public estudantes: any = async (id: string) => {
       const result = await BaseDatabase.connection.raw(`
    SELECT ESTUDANTE.id, ESTUDANTE.turma_id FROM ESTUDANTE
    `)

    return result[0]
    };

    public alterModulo: any = async (modulo: string, id: string) => {
        await BaseDatabase.connection.raw(`
        UPDATE TURMA
        SET modulo = ${modulo}
        WHERE id = ${id}
        `)
    }
};