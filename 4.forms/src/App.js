import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {login: '', password: '', message: '', sex: 'Не определился', habit: []};
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(event){
    alert(`${this.state.login}, добро пожаловать!
      \n${this.state.message}
      \nПол:${this.state.sex}
      \nВредные привычки:${this.state.habit}`);
    event.preventDefault();
  }

  onChange(event){
    const name = event.target.name;
    if (name == "habit"){
      this.setState({habit: [...event.target.selectedOptions].map(o => o.value)})
    } else {
      this.setState({[name]: event.target.value});
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p><label>Логин:<br/>
        <input type="text" name="login"
          value={this.state.login} onChange={this.onChange}/></label></p>
        <p><label>Пароль:<br/>
        <input type="password" name="password"
          value={this.state.password} onChange={this.onChange}/></label></p>
        <p><label>Комментарий:<br/>
        <textarea type="text" name="message"
        value={this.state.message} onChange={this.onChange}>
        Введите любой дополнительный текст
        </textarea>
        </label></p>

        <p><label>Пол:<br/>
        <select name="sex" value={this.state.sex} onChange={this.onChange}>
          <option value="Мужчина">Мужчина</option>
          <option value="Женщина">Женщина</option>
          <option value="Не определился">Не определился</option>
        </select>
        </label></p>

        <p><label>Вредные привычки (выбирать с нажатым Ctrl):<br/>
        <select name="habit" multiple={true} value={this.state.habit} onChange={this.onChange}>
          <option value="Курю">Курю</option>
          <option value="Пью">Пью</option>
          <option value="Матерюсь">Матерюсь</option>
        </select>
        </label></p>

        <p><input type="submit" value="Войти"/></p>
      </form>
    );
  }

}

export default App;
