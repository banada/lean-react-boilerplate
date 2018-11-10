import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {
    // Start React
    ReactDOM.render(<App />, document.getElementById('react-container'))
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <h1>Hello, world!</h1>
        );
    }
}

