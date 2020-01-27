import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { Search } from "./components/search-field/search-field.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
      imageList: [
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38
      ]
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const {monsters, searchField, imageList} = this.state;
    const filteredMonster = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>
          BTS Industries Group
        </h1>
        <Search 
        key='SearchField'
        placeholder='Search Monster'
        handleChange={val => {
          this.setState({ searchField: val.target.value }
          );
        }}
        />
        <CardList
          filteredMonster={filteredMonster}
          imageList={imageList}
        />
      </div>
    );
  }
}

export default App;
