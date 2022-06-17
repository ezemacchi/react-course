import React, { Component } from 'react';

export default class AppContent extends Component {

  state = {posts: []}

  fetchList = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.setState({posts: json});
      });
  }

  clickedItem = (x) => {
    console.log("clicked", x)
  }

  render() {
    return (
      <p>
        This is the content.

        <br />
        <button onClick={this.fetchList} className="btn btn-primary" href="#">Fetch data</button>

        <hr />
        <ul>
          {this.state.posts.map(c => (
            <li key={c.id}>
              <a href="#!" onClick={() => this.clickedItem(c.id)}>
                {c.title}
              </a>
            </li>
          ))}
        </ul>
      </p>
    )
  }
}