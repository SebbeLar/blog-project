import React from 'react';

export default class Test extends React.Component {
    constructor() {
        super();

        this.state = {
            data: 'Hello from Webpack'
        };
    }
    handleClick() {
        fetch('http://localhost:9090/api')
        .then(function(response) {
            console.log(response);
        });
    }
    render() {
        return (
           <div>
                <button onClick={() => this.handleClick()}>Click me</button>
                <p>{this.state.data}</p>
           </div>
        );
    }
}
