
const Busca = ({busca, setBusca}) => {
  return (
    <div className="busca">
       <h2>Buscador</h2>
       <input 
       type="text"
       value={busca}
       onChange={(e)=> setBusca(e.target.value)}
       placeholder="Buscar tarefa"      
      />
    </div>
  )
}

export default Busca