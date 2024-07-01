import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.pathname)
    if(loading){
        return <div className="w-full h-screen flex justify-center items-center">
                <span className="loading loading-spinner text-secondary"></span></div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname}  to ="/login"></Navigate>;
};

export default PrivateRoutes;

//