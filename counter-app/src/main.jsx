import React from "react";
import ReactDOM from "react-dom/client";
// import {HelloWorld} from "./helloWorld.jsx";
import {FirstApp} from "./FirstApp.jsx";
import { PrimerComponente  } from "./CounterApp.jsx";
import { Boton } from "./button.jsx";
import { ColorPicker } from "./colorPicker.jsx";
import {Tareas} from "./tareas.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FirstApp/>
        <PrimerComponente/>
        <Boton/>
        <ColorPicker/>
        <Tareas/>
        
    </React.StrictMode>
)  