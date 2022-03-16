import React from 'react';

// COMPONENTES
import ReactDOM from 'react-dom';
import AppRoute from "./routes";
import {Provider} from "react-redux";
import {CookiesProvider} from "react-cookie";

ReactDOM.render(
    <React.StrictMode>
        <CookiesProvider>
            <AppRoute/>
        </CookiesProvider>
    </React.StrictMode>, 
    document.getElementById('root')
);




