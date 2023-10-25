import React from 'react'
import job1 from '../imagenes/SOLICITAN.jpg'
import job2 from '../imagenes/CONTADOR PRIVADO.jpg'
import job3 from '../imagenes/PUBLICACION.png'
import job4 from '../imagenes/PUBLICACION 3.png'

const JobBag = () => {
  return (
    <>
    <h1>Oferta de empleo</h1>
    <div>
    <img src={job1} alt="1"/>
    </div>
    <div>
    <img src={job2} alt="2" width="500 px"/>
    </div>
    <div>
    <img src={job3} alt="2" width="520 px"/>
    </div>
    <div>
    <img src={job4} alt="2" width="520 px"/>
    </div>
    </>
  )
}

export default JobBag