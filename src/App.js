import { useState } from "react";
import "./App.css";
import AppNav from "./components/AppNav";
import AppRoutes from "./routes/AppRoutes";
import Axios from "axios";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  Axios.defaults.headers.common["Authorization"] =
    "Bearer" + (user ? user.jwt_token : "");

  return (
    <div className="App">
      <AppNav user={user} setUser={setUser} />
      <AppRoutes user={user} setUser={setUser} />
    </div>
  );
}

export default App;
