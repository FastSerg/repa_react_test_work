import React from 'react';
import ReactDOM from 'react-dom/client';

const h1 = <h1>hello word</h1>;

function App() {
    return (
        <div>
            {h1}
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, quibusdam. Atque corporis ullam maiores iusto velit adipisci, labore aliquid nam.</p>
        </div>
    )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);

