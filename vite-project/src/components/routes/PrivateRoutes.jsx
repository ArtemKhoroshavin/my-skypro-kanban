import { Navigate, Outlet } from "react-router-dom"
import { paths } from "../../lib/constsns"

function PrivateRoutes({user}) {
   
    return (
        user ? <Outlet/> : <Navigate to={paths.LOGIN}/>
    )
}
export default PrivateRoutes