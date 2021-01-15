import React, { Component } from "react";
import { getPosts } from "../Actions/Index";

export default class Posts extends Component {
  static async getInitialProps() {
    const posts = await getPosts();
    return { posts };
  }
  render() {
    const { posts } = this.props;
    return (
      <div className="container">
        <h1>i Am post page</h1>
        <ul>
          {posts.map((p) => (
            <li key={p.id}>
              <span>{p.id} -</span>
              <span>{p.title}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
