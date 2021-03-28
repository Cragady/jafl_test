// import React, { Component } from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class TopScroller extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }
  
    render() {
        // return this.props.children
        return null;
    }
}

export default withRouter(TopScroller);