import React, { useState } from 'react'

export default function Profile() {
  const [name, setName] = useState('Samuel')

  return (
    <section>
      <h1>Profile</h1>
      <p>Estado local: nombre = {name}</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Escribe tu nombre"
      />
      <p>Prueba a cambiar el estado y navegar entre rutas: el estado es local a esta ruta.</p>
    </section>
  )
}
