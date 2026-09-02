function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 3 * 1000))
}

async function invite(name) {
  console.log(`Convidado ${name}`)

  try {
    await sleep()
    console.log(`${name} abriu o invite`)
  } catch (error) {
    console.log("Nao foi possivel abrir o invite")
    console.log(error)
  } finally {
    console.log("Sempre vai ser chamado")
  }
}

invite("Matheus")