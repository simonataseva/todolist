import React from 'react';
import ReactDOM from 'react-dom';

function MyInfo() {
  return (
    <div>
      <h1>Simona</h1>
      <p>I'm from Macedonia, my hometown is called Bitola. I have 24 years, and i love to play football.</p>
      <ul>
        <li>Palma de Mallorca</li>
        <li>Santorini</li>
        <li>Maldives</li>
      </ul>
    </div>
  )  
}

ReactDOM.render(
  <MyInfo />,
  document.getElementById('root')
)
