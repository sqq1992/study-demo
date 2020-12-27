import React, {Component} from "react";

const ReactReduxContext = React.createContext(null)

export default class Provider extends Component {

    constructor(props) {
        super(props);
        this.store = props.store;
        this.state = {
            ...this.store.getState()
        };
    }

    // getChildContext() {
    //     return {
    //         store: this.store
    //     }
    // }

    render() {
        const Context = ReactReduxContext

        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}