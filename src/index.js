import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app"
import {BrowserRouter} from "react-router-dom";

const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render( 
<BrowserRouter>
<App/>
</BrowserRouter> ); 

