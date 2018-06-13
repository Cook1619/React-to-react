import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {text: "Villian"}
    }
    render() {
        return (
            <h1>{this.props.superhero.name}</h1>
        )
    }

}
export default App;
