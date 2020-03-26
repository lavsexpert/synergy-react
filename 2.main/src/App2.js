import React from 'react';

function Welcome(props){
  return <h1>Привет, {props.name}</h1>;
}

class Welcome2 extends React.Component {
    render() {
        return <h1>Привет, {this.props.name}</h1>;
    }
}

function App2(){
  return (
    <div>
      <Welcome2 name="Пётр"/>
      <Welcome2 name="Иван"/>
      <Welcome2 name="Ира"/>
    </div>
  );
}

export default App2;
