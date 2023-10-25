import React from "react";

const Tickets = () => {
  return (
    <div className="form-container">
      <h2>Solicita tu comprobante CFDI</h2>
      <form action="https://formsubmit.co/compaluis51@hotmail.com" method="POST">
        <div className="mb-3">
          <label htmlFor="exampleName1" className="form-label">
            Tu nombre completo
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Ejemplo: Juan Pérez"
            vid="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Su nombre nunca es compartido con alguien más.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="examplePhone1" classame="form-label">
            Teléfono
          </label>
          <input
            type="tel"
            className="form-control"
            placeholder="Ejemplo: 25 35 45 55 65"
            vid="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Su número nunca es compartido con alguien más.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Correo electrónico
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Ejemplo: jhony@doe.com"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Su correo nunca es compartido con alguien más.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleName1" classame="form-label">
            Datos fiscales
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Escribe correctamente los datos fiscales"
            vid="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            La información que  proporciona es confidencial.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="formFileMultiple" className="form-label">
            Adjunta tus boletos a facturar
          </label>
          <input
            className="form-control"
            type="file"
            id="formFileMultiple"
            multiple
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Tickets;
