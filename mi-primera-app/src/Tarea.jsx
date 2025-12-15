// src/Tarea.jsx
import React from 'react';

function Tarea({ texto, alEliminar }) {
  return (
    <div className="tarea-card">
      <p>{texto}</p>
      <button className="boton-eliminar" onClick={alEliminar}>
        Eliminar
      </button>
    </div>
  );
}

export default Tarea;