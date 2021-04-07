import "./Profile.css";

const Profile = (props) => {
  return (
    <div>
      Hola, no tengo children,
      {
        props.children
      }
    </div>
  );
};

export default Profile;
