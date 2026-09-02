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


pegarUsuario(1).then((usuario) => {
  return pegarPedidos(usuario.id).then((pedidos) => {
    return pegarDetalhesPedido(pedidos[0]).then((detalhes) => {
      console.log({
        usuario,
        pedidos,
        detalhes
      })
    })
  })
}).catch((error) => {
  console.error(error)
})