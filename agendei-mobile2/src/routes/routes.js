import { useContext } from "react";
import RoutesOpen from "./routesOpen";
import RoutesPrivate from "./routesPrivate";

import { AuthContext } from "../contexts/auth";



    function Routes(){

        const {user} = useContext(AuthContext);

        return user.id_user ? <RoutesPrivate />
        : <RoutesOpen />




    }

    export default Routes;