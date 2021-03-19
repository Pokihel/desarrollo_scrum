import './Profile.css';

const Profile = (props) => {
  return (
    <div className="card">
      <div className="card-title">
        <h1 className="inner-title">{props.name}</h1>
      </div>
      <div className="card-content">
        <ul>
          {props.stack.map((tech, index) => {
              return <li key={index}>{tech}</li>
          })}
        </ul>
      </div>
    </div>
  );
};

export default Profile;