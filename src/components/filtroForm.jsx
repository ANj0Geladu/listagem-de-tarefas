import { useState } from 'react'

function FiltroForm({adicionaFiltro}) {
  const [value, setValue] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!value || !category) return
    adicionaFiltro(value, category)
    setValue("")
    setCategory("")
  }



  return (
    <div className='Form'>
      <h2 className='tituloDoCriarTarefa'>Crie uma tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input 
         type="text"
         value={value}
         placeholder='Digite o título da tarefa' 
         onChange={(e) => setValue(e.target.value)}/>
        <select 
        placeholder ="Selecione uma categoria"  
        category={category}
        onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
          <option value="Lazer">Lazer</option>
          <option value="Outros">Outros...</option>
        </select>
        <button type='submit'>Enviar tarefa</button>
      </form>
    </div>
  )
}

export default FiltroForm