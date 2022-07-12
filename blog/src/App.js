import React, { useState } from 'react';
import './App.css';

function App() {
  let [currnetTab, setCurrentTab] = useState(0)
  let [currentPost, setCurrentPost] = useState(0);
  let tabs = [
    {id: 0, title: '탭1'},
    {id: 1, title: '탭2'},
    {id: 2, title: '탭3'},
  ]
  let posts = [
    {id: 1, title: '글제목1', createDate: '2022/07/10', like: 0, dislike: 0, discription: '글1 내용...'}, 
    {id: 2, title: '글제목2', createDate: '2022/07/11', like: 0, dislike: 0, discription: '글2 내용...'}, 
    {id: 3, title: '글제목3', createDate: '2022/07/12', like: 0, dislike: 0, discription: '글3 내용...'}
  ]; 
  return (
    <div className="App">
      <Nav tabs={tabs}/>
      <PostList currentPost={currentPost} setCurrentPost={setCurrentPost} posts={posts} />
    </div>
  );
}

function Nav(props) {
  return (
    <div className="nav">
      <div>개발 Blog</div>
      <div className='tabs'>
      {props.tabs.map((tab) => {
        return (
          <div className='tab' key={tab.id}>{tab.title}</div>
        )
      })}
      </div>
    </div>
  )
}

function PostList(props) {
  let posts = props.posts;
  return (
    <div>
      {posts.map((post) => {
        return(
          <div className="list" onClick={ ()=>{props.setCurrentPost(post.id)}}>
          <h3> {post.title} <span>👍</span> {post.like} <span>👎</span> {post.dislike} </h3>
          <p>{post.createDate}</p>
          <PostBody id={post.id} discription={post.discription} currentPost={props.currentPost}/>
          <hr/>
          </div>
        );
      })}
    </div>
  )
}

function PostBody(props) {
  if(props.currentPost === props.id) {
    return (
      <div>
          <div className="postbody">
          <p>{props.discription}</p>
        </div>
      </div>
    )
  }
  else {
    return (<></>)
  }
  
}

export default App;
