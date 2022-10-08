import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {criarEstudante} from "./endpoints/criarEstudante"
import {buscarEstudante, buscarTodosEstudantes} from "./endpoints/buscarEstudante"
import { mudarEstudante } from './endpoints/mudarEstudante'
import { criarDocente } from './endpoints/criarDocente'
import { buscarTodosDocentes } from './endpoints/buscarDocente'
import { mudarDocente } from './endpoints/mudarDocente'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

//Estudantes

app.post("/estudante", criarEstudante)

app.get("/estudante/:nome", buscarEstudante)

app.get("/estudante", buscarTodosEstudantes)

app.put("/mudarturma", mudarEstudante)

//Docentes

app.post("/docente", criarDocente)

app.get("/docente", buscarTodosDocentes)

app.put("/docente", mudarDocente)