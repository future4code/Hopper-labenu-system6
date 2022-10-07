import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import {criarEstudante} from "./endpoints/criarEstudante"
import {buscarEstudante, buscarTodosEstudantes} from "./endpoints/buscarEstudante"
import { mudarEstudante } from './endpoints/mudarEstudante'

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

app.post("/estudante", criarEstudante)

app.get("/estudante/:nome", buscarEstudante)

app.get("/estudante", buscarTodosEstudantes)

app.put("/mudarturma", mudarEstudante)

// // Exercício 1 - Create users
// app.post("/users", createUser)

// // Exercício 2 - Get users
// app.get("/users", getUsers)

// // Exercício 3 - Create product
// app.post("/products", createProduct)

// // Exercício 4 - Get products
// app.get("/products", getProducts)

// // Exercício 5 - Create purchase
// app.post("/purchases", createPurchase)

// // Exercício 6 - Get user purchases
// app.get("/users/:id/purchases", getUserPurchases)