import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

function MyButton() {
  return (
    <div>
      <h1>This is a button</h1>
      <button>I'm a button</button>
    </div>
  );
}

function AlertButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

function StateButton({ count, onClick }) {
  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function ProductList() {
  const products = [
    {title: 'Stratocaster', isGuitar: true, id:'1'},
    {title: 'Les Paul', isGuitar: true, id:'2'},
    {title: 'Yamaha Piano', isGuitar: false, id:'3'},
  ];

  const listItems = products.map(product => 
    <li
      key={product.id}
      style={{
        color: product.isGuitar ? 'magenta' : 'dargreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  )
}

  return (
    <>
      <h1>Welcome to my app</h1>
      <MyButton />

      <p>Here are a list of products</p>
      <ProductList />

      <p>This is an alert button!</p>
      <AlertButton />

      <p>These are state buttons</p>
      <StateButton count={count} onClick={handleClick} />
      <StateButton count={count} onClick={handleClick} />
    </>
  )
}

export default App
