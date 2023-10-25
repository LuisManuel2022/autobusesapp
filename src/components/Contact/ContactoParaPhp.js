import React from 'react'

const ContactoParaPhp = () => {
  return (
    <>
    <h2>Atención al cliente</h2>
    <form 
    method="post" 
    action="phpmailer.php"
    enctype="multipart/form-data"
    >
        <div>
            <span>Tu nombre</span>
            <input 
            type="text" 
            name="nombre"
            autoCapitalize='words'
            autoComplete='off'
            />
        </div>
        <div>
            <span>Teléfono</span>
            <input 
            type="text" 
            name="telefono"
            
            autoComplete='off'
            />
        </div>
        <div>
            <span>Correo electrónico</span>
            <input 
            type="email" 
            name="email"            
            autoComplete='off'
            />
        </div>
        <div>
            <span>Asunto</span>
           <select name="asunto">
            <option>Queja</option>
            <option>Sugerencia</option>
           </select>
        </div>
        <div>
            <span>Queja o sugerencia</span>
           <textarea name="queja" rows="6"></textarea>
        </div>
        <button type='submit'>Enviar mensaje</button>
    </form>
    </>
  )
}

export default ContactoParaPhp