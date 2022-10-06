import { Request, Response } from "express"
import connection from "../database/connection"

export class Turma {
    constructor(
        private id: string,
        private nome: string,
        private docentes: string,
        private estudantes: string,
        private modulo: string
    ) { }

    getId(): string {
        return this.id
    }

    getName(): string {
        return this.nome
    }

    getDocentes(): string {
        return this.docentes
    }

    getEstudantes(): string {
        return this.estudantes
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

    setDocentes(newDocentes: string): void {
        this.docentes = newDocentes
    }

    setEstudantes(newEstudantes: string): void {
        this.estudantes = newEstudantes
    }

    setModulo(newModulo: string): void {
        this.modulo = newModulo
    }
};

export const insertTurma = async (turma: Turma) => {
    await connection('labeSystem_turmas')
        .insert({
            id: turma.getId(),
            nome: turma.getName(),
            docentes: turma.getDocentes(),
            estudantes: turma.getEstudantes(),
            modulo: turma.getModulo()
        })
};

export const getTurma = async (turma: Turma): Promise<Turma[]> => {
    const result = await connection('labeSystem_turmas')
        .select('*')

    return result
};