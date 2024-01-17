import { useState } from 'react'
import './app.css'
import Filtro from './components/filtro'
import Form from './components/filtroForm'
import Busca from './components/busca'
import Filter from './components/filtroDbusca'

function App() {
  const [filtro, setFiltro] = useState([{
    id: 1,
    text: "estudar; swc, react, vite",
    category: "pessoal",
    isCompleted: false
  },
  {
    id: 2,
    text: "bater meta",
    category: "trabalho",
    isCompleted: false
  },
  {
    id: 3,
    text: "sair com a namorada",
    category: "lazer",
    isCompleted: false
  }
  ])

  const [busca, setBusca] = useState("")

  const [filter, setFilter] = useState("Asc")
  const [sort, setSort] = useState("Dsc")

  const adicionaFiltro = (text, category) => {
    const novoFiltro = [
      ...filtro,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false
      },
    ]
    setFiltro(novoFiltro)
  }

  const removeFiltro = (id) => {
    const novoFiltro = [...filtro]
    const filtragemRemoção = novoFiltro.filter(filtro =>
      filtro.id !== id ? filtro : null
    )
    setFiltro(filtragemRemoção)
  }

  const completeFiltro = (id) => {
    const novoFiltro = [...filtro]
    novoFiltro.map((filtro) => filtro.id === id ? filtro.isCompleted = !filtro.isCompleted : filtro)
    setFiltro(novoFiltro)
  }

  return (<div className="app">
    <h1 id='titulo'>Lista de tarefas</h1>
    <Busca busca={busca} setBusca={setBusca} />
    <Filter filter={filter} setFilter={setFilter}/>
    <div className='filtro-list'>
      {filtro
        .filter((filtro) => filter === "All" ? true : filter === "Completed" ? filtro.isCompleted : !filtro.isCompleted)    /*possível erro no codigo de filtro de ordenação de tarefas concluidas, há conflito no trecho linha7 do filtro.jsx */
        .filter((filtro) => filtro.text.toLowerCase().includes(busca.toLowerCase())
        ).map((filtro) => (
          <Filtro key={filtro.id}
            filtro={filtro}
            removeFiltro={removeFiltro}
            completeFiltro={completeFiltro}
          />
        ))}
    </div>
    <Form adicionaFiltro={adicionaFiltro} />
  </div>

  )
}

export default App
