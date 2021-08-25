import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'This is dynamic title';
  const age = 50;
  const link = 'http://google.com';

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        
        <h1>{ title }</h1>
        <p>{ age }</p>
        <p>{ 10 }</p>
        <p>{ Math.random() * 20 }</p>

        <a href={link}>Go to goole.com</a>
      </div>
    </div>
  );
}


export default App;
