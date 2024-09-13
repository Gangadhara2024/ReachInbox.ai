import { useRef } from "react";
import "./App.css";
import { GoogleLogin } from "./components/GoogleLogin";
import authAPI from "./components/Auth";

function App() {
  const authref = useRef(authAPI());
  return (
    <div className="App">
      <GoogleLogin  />
    </div>
  );
}

export default App;
