import React, {useState} from 'react';
import './inicio.css';
import Ifacebook from '/src/assets/facebook.png';
import Igoogle from '/src/assets/google.png';
import Ojoabierto from '/src/assets/vista.png';
import Ojocerrado from '/src/assets/cerrar-ojo.png';


const inicio = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const Visibilidaad = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="body">
      <div className="container">
        <div className="regi-box">
          <div className="texto-in">
            <h2 className='titulo'>¡Bienvenido!</h2>
            <p className='p1in'>Gracias por ser parte de esta comunidad llena de sabor</p>
            <p className='p2in'>Regístrate para ser parte de nosotros</p>
            <button className="boton-prima">Registrarse</button>
          </div>
        </div>

        <div className="iniSe-box">
        <h2 className='IniciarS'>Inicia Sesión</h2>
          <div className="social-login">
            <button className="google">
                <img src={Igoogle} alt="Igoogle" className="icon-google" />
            </button>
            <button className="facebook">
                <img src={Ifacebook} alt="Iface" className="icon-face" />
            </button>
          </div>
          <p className='text-i'>Iniciar Sesión con un e-mail y contraseña</p>
          <form>
            <div className="form-input">
              <input type="email" className="inputs-normal" placeholder="E-mail"/>
              <div className="password-container">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  className="password-input"
                  placeholder="Contraseña"
                />
                <img
                  src={passwordVisible ? Ojoabierto : Ojocerrado}
                  alt="Toggle Password Visibility"
                  className="password-icon"
                  onClick={Visibilidaad}
                />
              </div>
            </div>
            
            <div className="botoniniS">
              <button type="submit" className="boton-secu">Iniciar Sesión</button>
            </div>
          </form>
          
        </div>
      </div>
            

    </div>
  );
};

export default inicio
