import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="app">
      {/* <h1>tinder clone</h1> */}
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
