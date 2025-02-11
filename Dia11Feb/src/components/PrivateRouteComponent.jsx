import { Navigate } from "react-router-dom";

const PrivateRouteComponent = ({ auth, children }) => {
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRouteComponent;
