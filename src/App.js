import React, { Component } from "react";

const people = [
  {
    id: 1,
    firstName: "Sarah",
    lastName: "Johnson",
    age: 25
  },
  {
    id: 2,
    firstName: "Cadwell",
    lastName: "Thompson",
    age: 32
  },
  {
    id: 3,
    firstName: "Hart",
    lastName: "Maynard",
    age: 12
  },
  {
    id: 4,
    firstName: "Demetrius",
    lastName: "McGregor",
    age: 55
  }
];

const searchingFor = term => {
  return x => {
    return x.firstName.toLowerCase().includes(term.toLowerCase()) || !term;
  };
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people,
      term: ""
    };

    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler = event => {
    this.setState({ term: event.target.value });
  };

  render() {
    const { people, term } = this.state;

    return (
      <div>
        <form>
          <input type="text" onChange={this.searchHandler} value={term} />
        </form>
        {people.filter(searchingFor(term)).map(person => {
          return (
            <div key={person.id}>
              <h1>{person.firstName}</h1>
              <h1>{person.lastName}</h1>
              <h3>{person.age}</h3>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
