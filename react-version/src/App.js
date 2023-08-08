import './App.css';

// Import Components
import Navigation from './components/Navigation'
import Profile from './components/Profile'
import TweetList from './components/TweetList'
import TweetForm from './components/TweetForm'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Profile />

      <container>
        <TweetForm />
        <TweetList />
      </container>

    </div>
  );
}

export default App;
