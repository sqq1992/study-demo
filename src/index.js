
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App  extends Component{
    render() {
        let aa = "sun1992";

        return (
            <div>
                h1{aa}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));