import { useState } from "react";
import "./App.css";
import MainPage from "./pages/MainpPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainPage></MainPage>
    </>
  );
}
export function useStorage() {
  return JSON.parse(localStorage.getItem("data"));
}
export default App;
