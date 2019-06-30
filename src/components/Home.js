import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
      console.log(response);
    });
  }
  render() {
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente praesentium unde quidem facilis culpa qui
          accusantium quae fugit numquam pariatur iure eius, ab ipsam eaque similique dolores, alias minima harum?
        </p>
      </div>
    );
  }
}

export default Home;
