import React, { useState } from "react";

import ListaSelector from "./ListaSelector";

const Selector = () => {
  const [origen, setOrigen] = useState("");
  const [destino, setDestino] = useState("");
  const [pasajero, setPasajero] = useState("");
  const [costo, setCosto] = useState("");
  return (
    <div>
      <h1>Consulta el costo de tu viaje</h1>
      <ListaSelector
        title="origen"
        url=""
        handleChange={(e) => {
          setOrigen(e.target.value);
        }}
      />
      {origen && (
        <ListaSelector
          title="destino"
          url=""
          handleChange={(e) => {
            setDestino(e.target.value);
          }}
        />
      )}
      {destino && (
        <ListaSelector
          title="pasajero"
          url=""
          handleChange={(e) => {
            setPasajero(e.target.value);
          }}
        />
      )}
      {pasajero && (
        <ListaSelector
          title="costo"
          url=""
          handleChange={(e) => {
            setCosto(e.target.value);
          }}
        />
      )}

      <pre>
        <code>
          {origen} - {destino} - {pasajero} - {costo}
        </code>
      </pre>

      <br />
      <br />
    </div>
  );
};

export default Selector;
