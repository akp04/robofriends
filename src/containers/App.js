import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';


class App extends React.Component {

	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
		console.log("constructor");
	}

componentDidMount() {
	fetch("https://jsonplaceholder.typicode.com/users")
	.then(response => response.json())
  	.then(users => {this.setState({robots: users})});
  	console.log("componentDidMount");
}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    if(this.state.robots.length === 0)
    {
    	return <h1 className="f1 blue">Loading...</h1>
    }
    else
    {
    console.log("render");
    return (
      <div className="tc">
        <h1 className="f1 blue">Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
        	<CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
	}
  }
	
}

export default App;