import { Estudante } from "../models/Estudante";
import {BaseDatabase} from  "./BaseDatabase";

export class EstudanteDatabase extends BaseDatabase{
    TABLE_NAME: "ESTUDANTE";

    public async getAll(): Promise<Estudante> {
        return super.getAll()
    }

    public async create(Estudante: Estudante): Promise<void> {
        await super.create(Estudante)
    }

    public async getById(id: string){
        return super.getById(id)
    }
}