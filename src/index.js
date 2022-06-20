import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppFooter from './AppFooter';
import AppContent from './AppContent';
import AppHeader from './AppHeader'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handlePostChange = this.handlePostChange.bind(this);
    this.state = {posts: []};
  }

  handlePostChange(posts) {
    this.setState({posts: posts});
  }

  render() {
    const myProps = {
      title: "My Cool App!",
      subject: "My subject"
    };

    return (
      <div  className='app'>
        <AppHeader {...myProps} posts={this.state.posts} handlePostChange={this.state.handlePostChange} />
        <AppContent handlePostChange={this.handlePostChange}/>
        <AppFooter />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));