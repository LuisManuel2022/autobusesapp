import React from "react";
import { useForm } from "../../hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";

const initialForm = {
  name: "",
  telefono: "",
  email: "",
  queja: "",
};

const validationsForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  //let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "Sólo acepta letras y espacios ";
  }

  if (!form.telefono.trim()) {
    errors.telefono = "El campo 'Teléfono' es requerido";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El formato es incorrecto ";
  }

  return errors;
};

let styles = {
  fontWeight: "bold",
  color: "#dc3545",
};

export const FormMircha = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initialForm, validationsForm);
  return (
    <div>
      <h2>Quejas y sugerencias</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.name}
          required
        />
        {errors.name && <p style={styles}>{errors.name}</p>}
        <input
          type="tel"
          name="telefono"
          placeholder="Ej: 5023458796"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.telefono}
          required
        />
        {errors.telefono && <p style={styles}>{errors.telefono}</p>}
        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.email}
          required
        />
        {errors.email && <p style={styles}>{errors.email}</p>}
        <textarea
          name="queja"
          cols="100"
          placeholder="Queja o sugerencia"
          onBlur={handleBlur}
          onChange={handleChange}
          value={form.queja}
          required
        ></textarea>
        {errors.queja && <p style={styles}>{errors.queja}</p>}
        <input type="submit" value="Enviar" />
      </form>
      {loading && <Loader/>}
      {response && <Message msg="Los datos han sido enviados" bgColor="#198754"/>}
    </div>
  );
};
