// Um buffer é como o node manipula dados binarios 

const buf = Buffer.from('Hello')
console.log(buf) // <Buffer 58 65 6c 6c 6f>
console.log(buf.length) // 5
console.log(buf[0]) // 42 (ASCII de 'H')
console.log(buf.toString) // 'Hello'