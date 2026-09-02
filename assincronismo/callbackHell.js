function pegarUsuario(id, callback) {
  setTimeout(() => {
    console.log("Usuário carregado");
    callback(null, { id, nome: "Maria" })
  }, 1000)
}

function pegarPedidos(usuarioId, callback)  {
  setTimeout(() => {
    console.log("Pedidos carregados");
    callback(null, ["Pedido1", "Pedido2"])
  }, 1000)
}

function pegarDetalhesPedido(pedido, callback) {
  setTimeout(() => {
    console.log("Detalhes do pedido carregado", callback);
    callback(null, {
      pedido,
      valor: 150
    }, 1000)
  })
}

// Callback Hell

pegarUsuario(1, (erro, usuario) => {
  if(erro) {
    console.error(error)
  } else {
    pegarPedidos(usuario.id, (erro, pedidos) => {
      if (erro) {
        console.error(error)
      } else {
        pegarDetalhesPedido(pedidos[0], (erro, detalhes) => {
          if(erro) {
            console.error(error)
          } else {
            console.log("Resultado final")
            console.log({
              usuario,
              pedidos,
              detalhes,
            })
          }
        })
      }
    })
  }
})