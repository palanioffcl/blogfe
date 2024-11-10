import React, { useEffect } from "react";
import Router from "./router/index";
import { setAuthToken } from "./utils/axios";

function App() {
  useEffect(() => {
    setAuthToken(localStorage.token);
  }, [localStorage]);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;