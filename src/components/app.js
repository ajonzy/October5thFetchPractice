import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Navbar from "./navbar"
import Books from "./books"
import AddBook from "./addBook"

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route path="/books" component={Books} />
              <Route path="/add-book" component={AddBook} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
