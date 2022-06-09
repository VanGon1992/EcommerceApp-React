import React, { useState } from "react";

export default function Contact() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [genero, setGenero] = useState();
  const [ciudad, setCiudad] = useState();
  const [terminos, setTerminos] = useState(false);

  return (
    <div>
      <h2>Contact</h2>
      <form>
        <label htmlFor="Nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
        ></input>
        <label htmlFor="Apellidos">Apellidos</label>
        <input
          type="text"
          id="apellidos"
          name="apellidos"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
          placeholder="Apellidos"
        ></input>
        <br></br>
        <label htmlFor="Genero">Genero</label>
        <br></br>
        <label htmlFor="Hombre">Hombre</label>
        <input
          type="radio"
          id="hombre"
          name="genero"
          value="hombre"
          onChange={(e) => setGenero(e.target.value)}
        ></input>
        <label htmlFor="Mujer">Mujer</label>
        <input
          type="radio"
          id="mujer"
          name="genero"
          value="mujer"
          onChange={(e) => setGenero(e.target.value)}
        ></input>
        <label htmlFor="Otro">Otro</label>
        <input
          type="radio"
          id="otro"
          name="genero"
          value="otro"
          onChange={(e) => setGenero(e.target.value)}
        ></input>
        <br></br>
        <label htmlFor="Ciudad">Ciudad</label>
        <select name="Ciudad" onChange={(e) => setCiudad(e.target.value)}>
          <option value="">---</option>
          <option value="Madrid">Madrid</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Valencia">Valencia</option>
          <option value="Oviedo">Oviedo</option>
          <option value="Santiago">Santiago</option>
        </select>
        <br></br>
        <label htmlFor="Terminos">Aceptar Terminos y Condiciones</label>
        <input
          type="checkbox"
          id="terminos"
          name="terminos"
          onChange={(e) => setTerminos(e.target.checked)}
        ></input>
      </form>
    </div>
  );
}
