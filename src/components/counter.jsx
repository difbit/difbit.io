import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';


class Counter extends Component {
    state = {
        count: 0
    };
    render() {
        return (
            <div>
                <Badge bg="primary">{this.formatCount()}</Badge>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    constructor(props) {
        super(props);
        this.state = {count: 0};

        // This binding is necessary to make `this` work in the callback
        this.getBadgeClasses= this.getBadgeClasses.bind(this);
        this.formatCount= this.formatCount.bind(this);
    }

    getBadgeClasses() {
        let classes = "badge m2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}

export default Counter;
