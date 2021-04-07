import "./DevProfile.css";
import Foto from './Recursos/Foto.jpg';


const DevProfile = (props) => {
  return (
    <div className="card">
        <div>
            <h2 className="DevProfileName">Adriana Macedo Sanchez</h2>{/*Nombre*/}
            <br/>
        </div>
        <div>
            <img className="DevProfileImg" src={Foto}/>{/*Imagen*/}
        </div>
        <div>
            <h3 className="DevProfileDescription">Edad</h3>
            <p className="DevProfileDescription">21 Años</p>
            <h3 className="DevProfileDescription">Descripción</h3>
            <p className="DevProfileDescription">Estudiante de la licenciatura en informatica administrativa con conocimientos en React, C++, Java y Ruby</p>{/*Descripción*/}
            <h3 className="DevProfileDescription">Hobbies</h3>
            <p className="DevProfileDescription">Joyería de resina, jardinería, sublimación, cuidado de animales domésticos</p>
            <h3 className="DevProfileDescription">Experiencia laboral</h3>
            <p className="DevProfileDescription">Ventas de mostrador<br/> Manejo de efectivo <br/> Manejo de inventarios</p>{/*Descripción*/}
        </div>
        
    </div>
  );
};


export default DevProfile;
