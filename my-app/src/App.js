import logo from './logo.svg';
import './App.css';


import FunctionalGreeting from "./components/FunctionalGreeting";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import StatefulGreeting from "./components/StatefulGreeting";

function App() {
  return (
    <div className="App">
      <FunctionalGreeting />
      <FunctionalGreetingWithProps greeting = "Nice to Meet you!" name = "John" />
      <StatefulGreeting />
    </div>
  );
}

export default App;
