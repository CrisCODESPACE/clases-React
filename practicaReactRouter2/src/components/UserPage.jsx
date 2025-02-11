import { useParams } from "react-router-dom";

const UserPage = () => {
  const { endpoint } = useParams();

  return (
    <>
      <h2>Perfil de usuario</h2>
      <p>Bienvenido usuario {endpoint}</p>
    </>
  );
};

export default UserPage;
