//math.mjs - exportado com ES Modules - Assincrono
// Named exports (exportações nomeadas)
export function soma(a, b) {
  return a + b
}

export function subtracao(a, b) {
  return a - b
}

// Default export (exportação padrão)
export default class Calculadora {
  soma(a, b) { return a + b }
}

// Exportar variável
export const PI = 3.141519


//app.mjs - importando com ES Modules
import { soma, subtracao } from './math.mjs'
import Calculadora from './math.mjs'

// Importar modulo nativo
import path from 'node:path'
import { readFile } from 'node:fs/promises'

// Importar Json (node 22+)
import config from './config.json' with { type: 'json' }