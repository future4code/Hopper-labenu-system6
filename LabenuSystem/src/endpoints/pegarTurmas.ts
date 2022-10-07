
import { Request, Response } from "express"
import { TurmaDataBase } from "../database/TurmaDataBase"

export const pegarTurma = async (req: Request, res: Response): Promise<any> => {
    let errorCode = 400
    try {

        const turmaDB = new TurmaDataBase()
        const result = await turmaDB.pegarTurmas()
        const docentes = await turmaDB.docentes()
        const estudantes = await turmaDB.estudantes()

        if (result.length < 1) {
            errorCode = 404
            throw new Error("Não foram encontradas turmas!");
        }

        const response = result.map((input: any): any => {
            return {
                id: input.id,
                nome: input.nome,
                modulo: input.modulo,
                id_docente: docentes.filter((u: any) => u.turma_id === input.id).map((u:any) => u.id),
                id_estudante: estudantes.filter((u: any) => u.turma_id === input.id).map((u:any) => u.id)
            }
        });
    

        res.status(200).send({ turmas: response })

} catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
}
};

