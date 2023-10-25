
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import "./Navbar.css"


const NavBar = () => {

  
  return (
   
    <nav>
      <h2 className="title">Autobuses Teotihuacan</h2>
      <div className='menu'>
      <div className= "toggle">          
         <MenuIcon />
        </div>
        <div className= "items visible">
        <Link to="/">Inicio</Link>
        <Link to="/about">Nosotros</Link>
        <Link to="/destiny">Destinos</Link>
        <Link to="/tickets">Facturación</Link>
        <Link to="/contact">Contacto</Link>
        <Link to="/faq">Preguntas frecuentes</Link>
        <Link to="/job">Ofertas de empleo</Link>       
        </div>
        
        <button className='boton'>Cerrar</button>
        </div>
    </nav>
  
  )
}

export default NavBar