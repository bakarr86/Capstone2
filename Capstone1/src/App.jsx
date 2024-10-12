import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MusicSearch from './pages/MusicSearch'
import SavedTracks from './pages/SavedTracks'
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
  </Switch>
  </Router>
  );
  }
export default App
