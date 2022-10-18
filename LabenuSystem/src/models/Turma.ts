export class Turma {
    constructor(
        protected id: string,
        protected nome: string,
        protected modulo: string
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