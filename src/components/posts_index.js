import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts,deletePost }  from '../actions';

import _ from "lodash";
import { Link } from 'react-router-dom';

class PostIndex extends Component{

componentDidMount(){
  this.props.fetchPosts();
}


 renderPosts(){
 return _.map(this.props.posts,post =>{
  return (
       <li className="list-group-item" key={post.id}>
      <Link to={`/post/${post.id}`}>

      {post.title}
      </Link>
      </li>
  );
});
}

  render() {
  return (
    <div>
      <div className="text-xs-right">
        <Link className="btn btn-primary" to="/post/new">
           add a post
        </Link>
      </div>
    <h3>post</h3>
    <ul className="list-group">
    {this.renderPosts()}
    </ul>
    </div>
  );
  }
}


 function mapStateToProps(state){
   return {posts:state.posts};
 }


export default connect(mapStateToProps,{ fetchPosts,deletePost })(PostIndex);
