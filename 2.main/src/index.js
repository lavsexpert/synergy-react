import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Comment from './Comment'
import * as serviceWorker from './serviceWorker';

const author = {
  name: "Иван",
  url: "avatar.jpg"
};
const text = "Мой комментарий";
const date = new Date(2020, 3, 23);

const element = <Comment author={author} text={text} date={date}/>;

function sum(a, b){
  return a + b;
}

function changeName(user, name){
  user.name = name;
}

ReactDOM.render(
  element,
  document.getElementById('root')
);

serviceWorker.unregister();
