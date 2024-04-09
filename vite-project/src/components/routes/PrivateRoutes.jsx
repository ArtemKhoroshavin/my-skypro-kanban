import { Navigate, Outlet } from "react-router-dom"
import { paths } from "../../lib/constsns"

function PrivateRoutes({isAuth}) {
   
    return (
       isAuth ? <Outlet/> : <Navigate to={paths.LOGIN}/>
    )
}
export default PrivateRoutes