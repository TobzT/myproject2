import cssClasses from './App.module.css';
import React, {Component} from 'react';
import Person from '../components/Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Tobz', age: 20}, 
      {id: 2, name: 'test', age: 404},
      {id: 3, name: 'test2', age: 505}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;


    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  
  render() {

    let persons = null;

    if (this.state.showPersons) {
      
      
      persons = (
        
        <div>
          {this.state.persons.map((person, index) => {
            return (
            <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age} 
            key={person.id}
            change={(event) => this.nameChangedHandler(event, person.id)}
            />
            );
          })}
        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red'];
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold'];
    }

    let id = null;
    if(this.state.showPersons) {
      id = cssClasses.redButton;
    } else {
      id = cssClasses.greenButton;
    }
    
    return (
      
      <div className={cssClasses.App}>
        <h1>HELLO!!</h1>
        <p className={classes.join(' ')}>testing this</p>
        <button id={id}
        
        onClick={this.togglePersonsHandler} >Toggle persons</button>
        {persons}

      </div>
      
    );
  }
}

export default App;
