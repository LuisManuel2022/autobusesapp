import './contacto.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useState } from 'react';


const Formulario = () => {

  const [formularioenviado, setFormularioenviado] = useState(false)
  return (
    <>
    <Formik
    initialValues={{
      nombre: '',
      telefono: '',
      correo: '',
      queja: ''
    }}
    validate={(valores) => {
      let errores = {};

      if(!valores.nombre){
        errores.nombre='Por favor ingresa un nombre'
      } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
        errores.nombre= 'El nombre sólo puede contener letras y espacios'
      }

      if(!valores.telefono){
        errores.telefono='Por favor ingresa un número de teléfono'
      } else if(!/^\d{10}$/.test(valores.telefono)){
        errores.telefono= 'El numero telefónico debe contener 10 dígitos'
      }

      if(!valores.correo){
        errores.correo='Por favor ingresa un nombre'
      } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
        errores.correo= 'El formato es incorrecto'
      }

      return errores;
    }}
      onSubmit={(valores, {resetForm}) => {
        resetForm();
        console.log("formulario enviado")
        setFormularioenviado(true);
        setTimeout(() => setFormularioenviado(false), 3000)
      }}
    >
      
      {( { errors}) => (
        <Form className= "formulario">
          
        <h2>Atención al cliente</h2>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <Field
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Escribe tu nombre"
           
          />
          <ErrorMessage name="nombre" component={() => (
            <div className='error'>{errors.nombre}</div>
            )}/>
          
        </div>
        <div>
          <label htmlFor="telefono">Teléfono</label>
          <Field
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Ejemplo: 5522552230"          
            
          />
          <ErrorMessage name="telefono" component={() => (
            <div className='error'>{errors.telefono}</div>
            )}/>
        </div>
        <div>
          <label htmlFor="correo">Correo electrónico</label>
          <Field
            type="email"
            id="correo"
            name="correo"
            placeholder="Ej.: hojn@doe.com"            
            
          />
          <ErrorMessage name="correo" component={() => (
            <div className='error'>{errors.correo}</div>
            )}/>
        </div>
        <div>
          <label htmlFor="queja">Queja o sugerencia</label>
          <Field
            type="textarea"
            id="queja"
            name="queja" as="textarea"
            placeholder="Escribe el asunto"
           
          />
          
        </div>
        <button type="submit">Enviar mensaje</button>
        {formularioenviado && <p className='exito'>Formulario enviado con exito</p>}
      </Form>
      )}
      
      {/*
      {( {values, errors, touched, handleSubmit, handleChange, handleBlur}) => (
        <form className= "formulario" onSubmit={handleSubmit}>
          
        <h2>Atención al cliente</h2>
        <div>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Escribe tu nombre"
            value={values.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.nombre && errors.nombre && <div className='error'>{errors.nombre}</div>}
        </div>
        <div>
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Ejemplo: 55 22 55 22 30"
            value={values.telefono}
            onChange={handleChange}
            onBlur={handleBlur}
            
          />
        </div>
        <div>
          <label htmlFor="correo">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            placeholder="Ej.: hojn@doe.com"
            value={values.correo}
            onChange={handleChange}
            onBlur={handleBlur}
            
          />
        </div>
        <div>
          <label htmlFor="queja">Queja o sugerencia</label>
          <input
            type="textarea"
            id="queja"
            name="queja"
            placeholder="Escribe el asunto"
            value={values.queja}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </div>
        <button type="submit">Enviar mensaje</button>
        {formularioenviado && <p className='exito'>Formulario enviado con exito</p>}
      </form>
      )}*/}
      </Formik>
    </>
  );
};

export default Formulario;
