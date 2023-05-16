import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const MedecinPrivateRoute = () => {
  const user = useSelector((store) => store?.user?.user);
  return (
    user &&
    (user?.role === "medecin" ? <Outlet /> : <Navigate to={"/medcinedash/"} />)
  );
};

export default MedecinPrivateRoute;
