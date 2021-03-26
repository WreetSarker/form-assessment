import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/form">
          <Form></Form>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
