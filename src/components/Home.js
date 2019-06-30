import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png';
import { connect } from 'react-redux';

class Home extends Component {
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A Pokeball" />
            <Link to={'/' + post.id}>
              <div className="card-content">
                <span className="card-title red-text ">{post.title}</span>
                <p>{post.body}</p>
              </div>
            </Link>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yellowBright.</div>
    );
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        <div>{postList}</div>
      </div>
    );
  }
}

export default connect()(Home);
