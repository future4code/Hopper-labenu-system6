export abstract class Usuario{
    constructor(
        private id: string,
        private nome: string,
        private email: string,
        private data_nasc: string,
        private turma_id: string
    ) {
        this.id = id
        this.nome = nome
        this. email = email
        this.data_nasc = data_nasc
        this.turma_id = turma_id
    }

    public getId(){
        return this.id
    }
    public getNome(){
        return this.nome
    }
    public getEmail(){
        return this.email
    }
    public getData_nasc(){
        return this.data_nasc
    }
    public getTurma_id(){
        return this.turma_id 
    }

    public setId(newId: string){
        this.id = newId
    }
    public setNome(newNome: string){
        this.nome = newNome
    }
    public setEmail(newEmail: string){
        this.email = newEmail
    }
    public setData_nasc(newData_nasc: any){
        this.data_nasc = newData_nasc
    }
    public setTurma_id(newTurma_id: string){
        this.turma_id = newTurma_id
    }
}