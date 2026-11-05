function Mensagem({ texto, sucesso }) {
  if (texto === '') {
    return null
  }

  return (
    <p className={sucesso ? 'mensagem sucesso' : 'mensagem erro'}>
      {texto}
    </p>
  )
}

export default Mensagem