import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { criarTurma } from './endpoints/criarTurma'
import { pegarTurma } from './endpoints/pegarTurmas'
import { alterarModulo } from './endpoints/alterarModulo'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())


app.post("/turmas", criarTurma);

app.get("/turmas", pegarTurma);

app.put("/turmas/modulo", alterarModulo);


app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});