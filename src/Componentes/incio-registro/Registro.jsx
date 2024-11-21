import React, {useState} from 'react';
import './registro.css';
import Ifacebook from '/src/assets/facebook.png';
import Igoogle from '/src/assets/google.png';
import Ojoabierto from '/src/assets/vista.png';
import Ojocerrado from '/src/assets/cerrar-ojo.png';


const Registro = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const Visibilidaad = () => {
        setPasswordVisible(!passwordVisible);
    };

    return (
        <div className="body">
            <div className="container">
                <div className="reg-box">
                    <h2 className='registro'>Regístrate</h2>
                    <div className="social-login">
                        <button className="google">
                            <img src={Igoogle} alt="Igoogle" className="icon-google" />
                        </button>
                        <button className="facebook">
                            <img src={Ifacebook} alt="Iface" className="icon-face" />
                        </button>
                    </div>
                    <p className='text-r'>Registrate con un e-mail y nombre de usuario</p>
                    <form>
                        <div className="form-input">
                            <input type="text"  className="inputs-normal" placeholder="Nombre de usuario"/>
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
                        
                        <div className="botonreg">
                            <button type="submit" className="boton-prim">Registrarse</button>
                        </div>
                    </form>
                </div>

                <div className="iniS-box">
                    <div className="texto-in">
                        <h2 className='titulo'>¡Hola!</h2>
                        <p className='p1'>Sé parte de esta comunidad llena de chefcitos que cocinan con amor</p>
                        <p className='p2'>Inicia sesión si ya eres parte de la comunidad</p>
                        <button className="boton-sec">iniciar sesión</button>
                    </div>
                </div>
            </div>
            

        </div>
    );
};

export default Registro;
