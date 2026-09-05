// Stream - Pega algo grande e fatiar em varios pedaços menores (Chunks)

// Readble - Leitura Emite chunks de dados que podem ser consumidos. Exemplos nativos: fs.createReadStream, http.IncomingMessage, process.stdin.
import { Readable } from 'node:stream'
import { createReadStream } from 'node:fs'

// consumir stream de arquivo
const fileStream = createReadStream('./large.csv', {
  encoding: 'utf-8',
  highWaterMark: 64 * 1024, // chunks de 64 KB
})

// modo flowing — event-driven
fileStream.on('data',  (chunk) => process(chunk))
fileStream.on('end',   ()      => console.log('leitura concluída'))
fileStream.on('error', (err)   => console.error(err))

// modo paused — controle manual
fileStream.pause()
fileStream.resume()

// criar Readable customizado
const counter = new Readable({
  read() {
    for (let i = 0; i < 5; i++) {
      this.push(`item ${i}\n`)
    }
    this.push(null) // sinaliza o fim da stream
  }
})

// usando for await...of (mais idiomático)
for await (const chunk of fileStream) {
  processChunk(chunk)
}

// Recebe e persiste dados. Exemplos nativos: fs.createWriteStream, http.ServerResponse, process.stdout.
import { Writable } from 'node:stream'
import { createWriteStream } from 'node:fs'

// escrever em arquivo
const fileOut = createWriteStream('./output.log', { flags: 'a' })

fileOut.write('linha 1\n')
fileOut.write('linha 2\n')
fileOut.end('fim do arquivo\n', () => {
  console.log('gravação concluída')
})

// backpressure — respeite o sinal de pausa
function writeWithBackpressure(stream, data) {
  const canContinue = stream.write(data)
  if (!canContinue) {
    // espera o drain antes de continuar
    stream.once('drain', () => writeMore())
  }
}

// Writable customizado
const collector = new Writable({
  write(chunk, encoding, callback) {
    console.log('recebido:', chunk.toString())
    callback() // sinaliza que o chunk foi processado
  }
})

collector.write('hello')
collector.write('world')
collector.end()

// Lê, transforma e re-emite dados. É ao mesmo tempo Readable e Writable. Usado para compressão, parsing, criptografia.
import { Transform, pipeline } from 'node:stream'
import { createGzip, createGunzip } from 'node:zlib'
import { createReadStream, createWriteStream } from 'node:fs'
import { promisify } from 'node:util'

const pipelineAsync = promisify(pipeline)

// Transform customizado — converte para maiúsculas
const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase())
    callback()
  }
})

// pipeline: lê → transforma → escreve
await pipelineAsync(
  createReadStream('./input.txt'),
  upperCase,
  createWriteStream('./output.txt'),
)

// compressão com zlib (Transform nativo)
await pipelineAsync(
  createReadStream('./big-file.json'),
  createGzip(),         // Transform que comprime
  createWriteStream('./big-file.json.gz'),
)

// descompressão
await pipelineAsync(
  createReadStream('./big-file.json.gz'),
  createGunzip(),
  createWriteStream('./big-file.restored.json'),
)