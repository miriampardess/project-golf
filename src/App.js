import "./App.css";
import React, { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Routing from "./routes/Routing";
import { Provider } from "react-redux";
import store from "./redux/Store";
import Cart from "./components/Cart";
import Main from "./components/Main";
import Profile from "./components/Profile";
import ImportEnv from "./components/Import-env";
import GameOrder from "./components/GameOrder";
import GameTime from "./components/GameTime";
import Header from "./components/Header";

function App() {
  const [connect, setConnect] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          {/* <Header /> */}
          <ImportEnv />
          {/* <GameTime /> */}


          {/* <Routing setConnect={setConnect} connect={connect} /> */}
          {/* <Cart /> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
