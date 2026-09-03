// math.js - Exportando com common js

function soma(a, b) {
  return a + b
}

function subtracao(a, b) {
  return a - b
}

// Exportar objeto com multiplas funções
module.exports = { soma, subtracao }

// Exportar uma unica coisa
module.exports = function soma(a, b) {
  return a + b
}

// app.js - importando com CommonJS
const { soma, subtracao } = require('./math')

// Importar modulo nativo do node
const path = require('node:path')
const fs = require('node:path')

// importar pacote npm
const express = require('express')

console.log(soma(1, 2))
console.log(path.join('a', 'b'))


// require() é sincrono - carrega e executa o módulo imediatamente
// module.exports pode exportar qualquer valor
// arquivos .js sem o type no package.json por padrão sao CommonJS