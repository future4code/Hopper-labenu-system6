import { Turma } from "./Turma";

export class TurmaDocEst extends Turma {
    constructor(
        id: string,
        nome: string,
        modulo: string,
        protected id_docente: string,
        protected id_estudante: string
    ) { 
        super (id, nome, modulo)
        this.id_docente = id_docente
        this.id_estudante = id_estudante
    }
};