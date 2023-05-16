import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PatientPrivateRoute = () => {
  const user = useSelector((store) => store?.user?.user);
  return (
    user &&
    (user?.role === "patient" ? <Outlet /> : <Navigate to={"/patientdash/h"} />)
  );
};

export default PatientPrivateRoute;
