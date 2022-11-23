import logo from './logo.svg';
import './App.css';
import Profile from './Components/Profile';
import About from "./Components/About";
import Interest from './Components/Interest';
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Profile />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}

export default App;
