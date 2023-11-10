import {useContext, useEffect} from "react";
import AppRouter from "./router";
import {setupAxios} from "../services/axios";
import {TOKEN_COOKIE_KEY} from "../constants/global";
import {AuthenticationContext} from "./context/AuthenticationContext";
import Cookies from "universal-cookie";
import './App.css'

function App() {
    const cookies = new Cookies();
    const { setAuthenticated, userLoaded } = useContext(AuthenticationContext);

    useEffect(() => {
        console.log(userLoaded);
        setupAxios();
        if (cookies.get(TOKEN_COOKIE_KEY)) {
            setAuthenticated(true);
        }
        console.log(userLoaded);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <>{userLoaded && <AppRouter />}</>;
}

export default App;
