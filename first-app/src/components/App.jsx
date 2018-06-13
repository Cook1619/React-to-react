import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {text: "VS Superman!!"}
    }
    render() {
        return (
            <h1>{this.props.superhero.name} {this.state.text}</h1>
        )
    }

}
export default App;
