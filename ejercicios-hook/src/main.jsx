import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HookApp } from "./HookApp";
<<<<<<< HEAD

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HookApp />
=======
import { CounterApp } from "./CounterApp";
import { Use_01 } from "./Use_01";
import { CustomHook } from "./CustomHook";
import { UseEffect } from "./useEffect/UseEffect";
import { Message } from "./useEffect/Message";
import { UseForm } from "./useEffect/useForm";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <HookApp />
    <CounterApp />
    <Use_01 />
    <CustomHook /> */}
    <UseEffect />
    <UseForm />
>>>>>>> 6a9d52459fdfb977072cb08ab1b38108f301477a
  </StrictMode>
);
