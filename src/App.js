

import React, { useEffect, useState } from 'react'
import BetaForm from './components/BetaForm';
import Footer from './components/Footer';
import Routes from './Routes';
import { Link, useHistory } from "react-router-dom";

function App() {

  const history = useHistory();
  const [path, setPath] = useState("");

  window.addEventListener("load", () => {

    if (window.location.pathname === "/subscribe") {
      setPath(window.location.pathname);
    }
  });

  const checkPath = () => {
    history.listen((location) => {
      setPath(location.pathname);
    });
  }

  useEffect(() => {
    checkPath();
  }, []);

  const showSubscribe = path;
  let _subscribe;
  if (showSubscribe !== "/subscribe") {
    _subscribe = (<li><Link to="/subscribe">Subscribe!</Link></li>)
  }

  return (
    <div className="App">
      <div className Container>
        <nav>
          <ul>
            <li><Link to="/">new React Router</Link></li>
          </ul>
          <ul>
            {_subscribe}
          </ul>
        </nav>
        <Routes />
        <BetaForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
