import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AssistantPrivateRoute = () => {
  const user = useSelector((store) => store?.user?.user);
  return (
    user &&
    (user?.role === "assistant" ? <Outlet /> : <Navigate to={"/switch/"} />)
  );
};

export default AssistantPrivateRoute;
