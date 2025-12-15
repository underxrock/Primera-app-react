// Trabajo realizado por Carlos Suarez Romero para la asignatura de Frontend

import { useState } from 'react';
import './App.css';
import Tarea from './Tarea'; // Importamos el componente hijo

function App() {
  // Estado 1: Para guardar lo que el usuario escribe en el input
  const [nuevaTarea, setNuevaTarea] = useState("");
  
  // Estado 2: Para guardar la lista de tareas (Array)
  const [listaTareas, setListaTareas] = useState([]);

  // Función para agregar tarea
  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return; // Evitar tareas vacías
    setListaTareas([...listaTareas, nuevaTarea]); // Copiamos la lista anterior y agregamos la nueva
    setNuevaTarea(""); // Limpiamos el input
  };

  // Función para eliminar tarea por su índice
  const eliminarTarea = (indice) => {
    const nuevaLista = listaTareas.filter((_, i) => i !== indice);
    setListaTareas(nuevaLista);
  };

  return (
    <div className="contenedor-principal">
      <h1>Mi Rutina de Gym </h1>
      
      <div className="input-grupo">
        <input 
          type="text" 
          placeholder="Agrega un ejercicio" 
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button onClick={agregarTarea}>Agregar</button>
      </div>

      <div className="lista-contenedor">
        {listaTareas.length === 0 ? (
          <p>Sin pendientes. ¿Nos vamos a entrenar?</p>
        ) : (
          listaTareas.map((tarea, index) => (
            // Llamamos al componente Tarea
            <Tarea 
              key={index} 
              texto={tarea} 
              alEliminar={() => eliminarTarea(index)} 
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;