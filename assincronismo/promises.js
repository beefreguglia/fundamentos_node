function sleep() {
  const timeToWait = 5 * 1000; // 5s
  const end = Date.now() + timeToWait;

  while(Date.now() < end){}
}

function invite(name) {
  console.log(`Convidando ${name}`)

  return new Promise((resolve, reject) => {
    sleep();
    resolve(true);
  })
}

invite("Matheus").then((type) => {
  if (type) {
    console.log("Aceitou")
  } else {
    console.log("Recusou")
  }
}).catch((error) => {
  console.log("Não foi possivel receber uma resposta!")
  console.error(error)
}).finally(() => {
  console.log("Sempre vou ser chamado")
})