import { createReadStream } from 'node:fs'
import { createInterface } from 'node:readline'

const INPUT_FILE = "employee-access.log"

const rl = createInterface({
  input: createReadStream(INPUT_FILE, { encoding: 'utf-8' }),
  crlfDelay: Infinity,
})

rl.on("line", (line) => {
  const parts = line.split(" ")
  console.log(parts)
})

rl.on("close", () => {
  console.log("TERMINAMOS DE LER UM ARQUIVO DE 100 MILHÕES DE LINHAS")
})

rl.on("error", (err) => {
  console.log("DEU ERRO NA LEITURA, AQUI ESTÁ O ERRO:")
  console.error(err)
})