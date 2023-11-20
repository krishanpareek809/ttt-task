import './App.css';
import Feed from './components/Feed/Feed';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profile />
      <Feed />
    </div>
  );
}

export default App;
