import connection from "../database/connection"

export class Turma {
    constructor(
        private id: string,
        private nome: string,
        private modulo: string
    ) { }

    getId(): string {
        return this.id
    }

    getName(): string {
        return this.nome
    }

    getModulo(): string {
        return this.modulo
    }

    setId(newId: string): void {
        this.id = newId
    }

    setName(newName: string): void {
        this.nome = newName
    }


    setModulo(newModulo: string): void {
        this.modulo = newModulo
    }
};


import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

export class TurmaDataBase{
    private connection = knex({
        client: "mysql",
        connection: {
           host: process.env.DB_HOST,
           port: 3306,
           user: process.env.DB_USER,
           password: process.env.DB_PASSWORD,
           database: process.env.DB_DATABASE,
           multipleStatements: true
        },
     });

    public insertTurma = async (turma: Turma) => {
        await connection('TURMA')
            .insert({
                id: turma.getId(),
                nome: turma.getName(),
                modulo: turma.getModulo()
            })
    };
    
    public getTurma = async (turma: Turma): Promise<Turma[]> => {
    
        const docentes: any = await connection.raw(`
        SELECT * FROM TURMA
        JOIN id_docentes ON DOCENTE(id)
        `)
    
        const estudantes: any = await connection.raw(`
        SELECT * FROM TURMA
        JOIN id_estudantes ON ESTUDANTE(id)
        `)

        const toTurmas = (turma: Turma): any => {
            return{
                id: turma.getId(),
                nome: turma.getName(),
                docentes,
                estudantes,
                modulo: turma.getModulo()
            }
        }
            
        const result = await connection('TURMA')
            .select('*')
    
        return result.map(toTurmas)
    };

    
}