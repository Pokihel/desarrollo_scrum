import "./Profile.css";

const Profile = (props) => {
  return (
    // <div className="card">
    //   <div className="card__side card__side--front">
    //     <div className="card__picture card__picture--1">&nbsp;</div>
    //     <h4 className="card__heading">
    //       <span className="card__heading-span card__heading-span--1">
    //         {props.name}
    //       </span>
    //     </h4>
    //     <div className="card__details">
    //       <ul>
    //        {props.stack.map((tech, index) => {
    //            return <li key={index}>{tech}</li>;
    //        })}
    //       </ul>
    //     </div>
    //   </div>
    //   <div className="card__side card__side--back card__side--back-1">
    //     <div className="card__cta">
    //       <div className="card__contact-box">
    //         <p className="card__contact-only">Redes sociales</p>
    //         <a href={props.linkedin} className="card__contact-value"> Linkedin</a>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      Hola, no tengo children,
      {
        props.children
      }
    </div>
  );
};

export default Profile;
