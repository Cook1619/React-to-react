import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "VS Superman!!",
            hasLoaded: false
        }


    }
    hasLoaded = () => {
        this.setState({hasLoaded: !this.state.hasLoaded});
    }
    render() {
        return (
            <React.Fragment>
                <h1>{this.props.superhero.name} {this.state.text}</h1>
                <input
                    placeholder={this.state.text}
                    onChange={(event) => {
                        this.setState({ text: event.target.value })
                    }}></input>
                <button onClick={this.hasLoaded}>Click me</button>
            </React.Fragment>

        )
    }

}
export default App;
