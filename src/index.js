import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppFooter from './AppFooter';
import AppContent from './AppContent';
import AppHeader from './AppHeader'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class App extends Component {

  render() {
    const myProps = {
      title: "My Cool App!",
      subject: "My subject"
    };

    return (
      <div  className='app'>
        <AppHeader {...myProps} />
        <AppContent />
        <AppFooter />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));