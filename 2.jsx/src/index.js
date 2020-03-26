import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';


function formatName(user){
  return user.name + ' ' + user.surname;
}

function hello(user){
  if (user) {
    return <a href={user.url}>Здраствуйте, {formatName(user)}!</a>
  } else {
    return React.createElement(
      'a',
      {href: "#"},
      "Здраствуйте, незнакомец."
    );
  }
}

const profile = {
  name: "Иван",
  surname: "Сидоров",
  url: "google.com"
};

const element = hello(profile);

ReactDOM.render(
  element,
  document.getElementById('root')
);

serviceWorker.unregister();
