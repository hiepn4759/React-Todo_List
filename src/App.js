import React, {Component} from 'react';
import './App.css';
import TodoIteam from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.TodoIteams = [
     {
      title: 'Nguyen Hiep',
      isCompete: true
     },
     {
      title: 'Phan Huyen',
      isCompete: true
     },
     {
       title: 'Duc Nguyen',
       isCompete: false
     }
    ];

  }

  render(){
    return (
      <div className="App">
        {
          this.TodoIteams.map((item, index) => <TodoIteam key={index} item={item} />)
        }
      </div>
    );
  }
}

export default App;
