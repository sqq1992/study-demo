import React, {Component} from "react";

import {store} from "../manualRedux";


export default function connect(mapStateToProps,mapDispatchToProps) {
    return function WrapConnectComponent(WrappedComponent) {
        return class Connect extends Component {
            constructor(props,context) {
                super(props);

                this.state = mapStateToProps(store.getState());
                this.mapDispatch = mapDispatchToProps(store.dispatch);
            }
            componentDidMount() {
                this.unsub = store.subscribable(() => {
                    this.setState(mapStateToProps(store.getState()));
                });
            }
            componentWillUnmount() {
                this.unsub();
            }
            render() {
                return (
                    <WrappedComponent {...this.props} {...this.state} {...this.mapDispatch} />
                )
            }
        }
    }
}