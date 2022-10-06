export type TDocente = {
    id: string,
    nome: string,
    email: string,
    data_nasc: string,
    turma_id: string
}

export class Docente {
    constructor (
        private id: string,
        private nome: string,
        private email: string,
        private data_nasc: string, 
        private turma_id: string,
        private especialidades: string
    ) {
        this.id = id
        this.nome = nome
        this.email = email
        this.data_nasc = data_nasc
        this.turma_id = turma_id
        this.especialidades = especialidades
    }

    public getId() {
        return this.id
    }

    public getNome() {
        return this.nome
    }

    public getEmail() {
        return this.email
    }

    public getDataNasc() {
        return this.data_nasc
    }

    public getTurmaId() {
        return this.turma_id
    }

    public getEspecialidades() {
        return this.especialidades
    }

    public setId(newId: string) {
        this.id = newId
    }

    public setNome(newNome: string) {
        this.nome = newNome
    }

    public setEmail(newEmail: string) {
        this.email = newEmail
    }

    public setDataNasc(newDataNasc: string) {
        this.data_nasc = newDataNasc
    }

    public setTurmaId(newTurmaId: string) {
        this.turma_id = newTurmaId
    }

    public setEspecialidades(newEspecialidades: string) {
        this.especialidades = newEspecialidades
    }

    
}