import React from "react"


function Filtro({filtro, removeFiltro, completeFiltro}) {

  return (
    <div className="filtro" style={{textDecoration: filtro.isCompleted ? "line-through" : ""}}>
        <div className="content">
          <p>{filtro.text}</p>
          <p className="category">({filtro.category})</p>
        </div>
        <div>
          <button className='complete' onClick={()=> completeFiltro(filtro.id)}>Completar</button>
          <button className='remove' onClick={()=> removeFiltro(filtro.id)}>Apagar</button>
        </div>
      </div>
  )
}

export default Filtro