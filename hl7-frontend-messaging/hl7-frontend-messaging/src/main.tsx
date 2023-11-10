import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline} from "@mui/material";
import theme from "./theme";
import {AuthenticationProvider} from "./context/AuthenticationContext";
import {BrowserRouter} from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <AuthenticationProvider>
                <CssBaseline />
                <App />
            </AuthenticationProvider>
        </ThemeProvider>
    </BrowserRouter>
)
