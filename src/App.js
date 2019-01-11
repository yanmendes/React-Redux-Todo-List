import React, { Component } from 'react';
import { Provider } from 'react-redux';

import "antd/dist/antd.css";
import './App.css'

import Todos from './js/components/Todos';
import TodoForm from './js/components/TodoForm';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" integrity="sha384-PmY9l28YgO4JwMKbTvgaS7XNZJ30MK9FAZjjzXtlqyZCqBY6X6bXIkM++IkyinN+" crossOrigin="anonymous"/>
          </header>
          <div className="todoContainer">
            <TodoForm />
            <hr />
            <Todos />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
