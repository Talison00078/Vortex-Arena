function ListaClientes({ clientes }) {
  return (
    <section className="clientes">
      <h2>Clientes cadastrados: {clientes.length}</h2>

      {clientes.length === 0 ? (
        <p>Nenhum cliente cadastrado ainda.</p>
      ) : (
        <ul>
          {clientes.map(cliente => (
            <li key={cliente.id}>
              {cliente.nome} - {cliente.modalidade}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ListaClientes