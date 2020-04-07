import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ImageUpload from './components/ImageUpload';
import GetImage from './components/GetImage';

export class App extends Component {
  render() {
    const style = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'center',
      alignItems: 'center',
      justifyContent: 'center'
    }

    return (
      <div className="mb-3">
        <h1> Welcome to React Imgae Upload</h1>
        <Router>
          <nav>
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link to="/"> Home </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/Images"> Images </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/" Component={ImageUpload}>
            <ImageUpload />
            </Route>
            <Route path="/Images" Component={GetImage}>
              <GetImage />
            </Route>
            <Route path="*">
            <ImageUpload/>
          </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;
