import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MusicSearch from './pages/MusicSearch'
import SavedTracks from './pages/SavedTracks'
import SpotifySearch from './pages/SpotifySearch';
function App() {
  return (
  <Router>
  <Navbar />
  <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/login" component={Login} />
  <Route path="/register" component={Register} />
  <Route path="/search" component={MusicSearch} />
  <Route path="/saved" component={SavedTracks} />
  <Route path="/SpotifySearch" component={SpotifySearch} />
  </Switch>
  </Router>
  );
  }
export default App
