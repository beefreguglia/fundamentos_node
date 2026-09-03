// Observer - Listeners/Subscribers
import { EventEmitter } from 'node:events'

const emmiter = new EventEmitter()

// listener permanente - dispara a cada emit
emmiter.on('data', (payload) => {
  console.log('Recebido:', payload)
})

// listener único - remove-se após a primeira execução
emmiter.once('connected', () => {
  console.log('Conexão estabelecida')
})

// emitter evento com dados
emmiter.emit('data', { id: 1, value: 42 })
emmiter.emit('connected')
emmiter.emit('connected') // ignorado - .once já foi removido

// remover listener específico
const handler = (x: any) => console.log(x)
emmiter.on('ping', handler)
emmiter.off('ping', handler) // Remove apenas este listener

// Herança

class Database extends EventEmitter {
  private connected = false

  connect(url: string) {
    setTimeout(() => {
      this.connected = true
      this.emit('connect', { url })
    }, 100)
  }

  query(sql: string) {
    if (!this.connected) {
      this.emit('error', new Error('not connected'))
      return
    }
    const start = Date.now()
    // ...executa query...
    this.emit('query', { sql, duration: Date.now() - start })
  }

  close() {
    this.connected = false
    this.emit('close')
    this.removeAllListeners()
  }
}

const db = new Database()

db.on('connect', ({ url }) => console.log(`conectado: ${url}`))
db.on('error',   (err)  => console.error('erro:', err.message))
db.on('query',   ({ sql, duration }) => console.log(`${sql} (${duration}ms)`))
db.on('close',   ()     => console.log('conexão encerrada'))

db.connect('postgres://localhost/app')

// Observer
emmiter.on("checkout", (param1, param2, param3) => {
  console.log('Preciso processar um pagamento')
  console.log(`${param1}, ${param2}, ${param3}`) // Deve retornar 1, 2, 3
})

function sleep(seconds: number = 3) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000))
}

while (true) {
  await sleep(5)
  emmiter.emit("checkout", 1, 2, 3)
}