import React from 'react';
import * as Redux from 'react-redux';

import * as actions from "actions";

import Navbar from "Navbar";

export class Main extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div>
          <Navbar/>
          <h1>Main Page</h1>
          <div className="row">
            <div className="columns medium-6 large-4 small-centered">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default Redux.connect()(Main);
