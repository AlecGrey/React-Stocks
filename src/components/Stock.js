import React from 'react'

const Stock = ( { data, handleClick } ) => {
  return (
    <div>

      <div className="card" onClick={ () => handleClick(data.id) } >
        <div className="card-body">
          <h5 className="card-title">{ data.name }</h5>
          <p className="card-text">{ data.price }</p>
        </div>
      </div>


    </div>
  )
}

export default Stock
