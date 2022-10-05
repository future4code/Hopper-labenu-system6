import knex from "knex";


export class TurmaDB {
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
        await this.connection('labeSystem_turmas')
            .insert({
                id: turma.getId(),
                nome: turma.getName(),
                docentes: turma.getDocentes(),
                estudantes: turma.getEstudantes(),
                modulo: turma.getModulo()
            })
    };

    public getTurma = async (turma: Turma): Promise<Turma[]> => {
        const result = await this.connection('Turmas')
            .select('*')

        return result
    };
}