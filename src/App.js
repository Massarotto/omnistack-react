import React from 'react';
import './global.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-box">
          <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>
            
        <div className="input-box">
        <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
        </div>
            

        <div className="input group">
        <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required></input>
        </div>
            
        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
