import React from 'react'

const App =() =>  {
    return  ( <div className="container">
    <div className="valid-keys">
        <span className="matched">vini</span>
        <span className="remainder">cius</span>
    </div>

    <div className="typed-keys">asrfeghejk</div>
    <div className="completed-words">
      <ol>
        <li>cidade</li>
        <li>carro</li>
        <li>moto</li>          
      </ol>
    </div>
  </div>
  );
};

export default App;