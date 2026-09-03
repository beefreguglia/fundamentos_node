// Leitura e escrita de arquivos
import { readFile, writeFile } from 'node:fs/promises'
import { DatabaseSync } from 'node:sqlite'

const json = await readFile("example.json", "utf-8")
const data = JSON.parse(json)

console.log(data)

await writeFile("example.json",JSON.stringify({
  name: "John Doe"
}, null, 2), "utf-8")

// Utilizando sqlite

const db = new DatabaseSync(":memory:")

db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    price REAL NOT NULL
  )
`)

db.prepare("INSERT INTO products (name, price) VALUES (?, ?)").run("Product 1", 25.40)

db.prepare("SELECT * FROM products").all().forEach((product) => {
  console.log(`ID: ${product.id}, Name: ${product.name}, Price:${product.price}`)
})