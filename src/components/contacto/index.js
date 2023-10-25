import React from 'react'





export const ContactoPhp = () => {
  return (
    <>
        <h1>Atención al usuario</h1>
        <main>
      
      <form method="post" action="phpmailer.php" enctype="multipart/form-data">
        <h2>Quejas y/o sugerencias</h2>
        <div>
          <span>Tu nombre</span>
          <input
            type="text"
            name="nombre"
            autocapitalize="words"
            autocomplete="off"
          />
        </div>
        <div>
          <span>Tu apellido</span>
          <input
            type="text"
            name="apellido"
            autocapitalize="words"
            autocomplete="off"
          />
        </div>

        <div>
          <span>Tu email</span>
          <input type="email" name="email" autocomplete="off" />
        </div>
        <div>
          <span>Asunto del mensaje</span>
          <select name="asunto">
            <option>Comentario</option>
            <option>Sugerencia</option>
            <option>Reclamo</option>
            <option>
              Suscripcion al twitch, asi sigue subiendo la barrita verde =)
            </option>
          </select>
        </div>
        <div class="large">
          <span>Adjunta una foto (de ser necesario)</span>
          <input type="file" name="foto" accept="image/*" />
        </div>
        <div class="large">
          <span>Mensaje</span>
          <textarea name="mensaje" rows="6" cols="80"> </textarea>
        </div>
        <div class="large">
          <button class="button" type="submit">Enviar mensaje</button>
        </div>
      </form>
    </main>

    </>
  )
}
