function sleep() {
  const timeToWait = 5 * 1000; // 5s
  const end = Date.now() + timeToWait;

  while(Date.now() < end){}
}

function invite(name, reply) {
  console.log(`Convidado ${name}`)
  
  // Simular que a pessoa está ocupada
  sleep()
  console.log(`${name} abriu o convite`)
  reply(true)
}

// Callback - funçao que passamos na chamada de outra função
// algum momento o callback será executado
invite('Mateus', (type) => {
  if (type) {
    console.log('Aceitou')
  } else {
    console.log('Recusou')
  }
})