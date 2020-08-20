import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {NavProvider} from "./UserContext"

ReactDOM.render(
<NavProvider>
    <App />
</NavProvider>, 
document.getElementById("root"));
