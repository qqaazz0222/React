import React, { useState } from 'react';
import './App.css';

function App() {
  let [title, setTitle] = useState(['글제목1', '글제목2', '글제목3']);
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);
  let [inputData, setInputData] = useState('');

  return (
    <div className="App">
      <div className="nav">
        <div>개발 Blog</div>
      </div>
      {
        title.map(function(a, i) {
          return (
            <div className="list" key={i}>
              <h3 onClick={ ()=>{ setModal(!modal); setModalTitle(i) }}>{ title[i] } <span onClick={ (e)=>{ e.stopPropagation(); setLike( like+1 )} }>👍</span>{ like }</h3>
              <p>7월 12일 발행</p>
              <button onClick={ ()=>{ 
                let copy = [...title];
                copy.splice(i, 1)
                setTitle(copy) } }>삭제</button>
              <hr/>
            </div>
          )
        })
      }
      <input onChange={ (e)=>{ setInputData(e.target.value) } }></input>
      <button onClick={ ()=>{ setTitle( [inputData, ...title]) } }>글 생성</button>
      {
        modal ? <Modal title={ title } setTitle={ setTitle } modalTitle={ modalTitle }/> : null
      }
    </div>
  );
}

function Modal(props){
  return (
    <div className="modal">
      <h4>{ props.title[ props.modalTitle ] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

export default App;
