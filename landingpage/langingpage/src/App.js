
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3> Librography Beta Program</h3>
            </div>
            <div className="item-menu">
              <a href="/#">Login</a>
            </div>
          </div>

          <div className="form">
            <h2>Torne-se um testador e receba uma licença grátis de testador beta!</h2>
            <form>
              <div className="items-form">
                <input placeholder="Nome" type="text" />
                <input placeholder="Sobrenome" type="text" />
                <input placeholder="Email" type="text" />
                <input placeholder="Plataforma" type="text" />
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
