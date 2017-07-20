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
        <Navbar/>
          <div>
            {this.props.children}
          </div>
      </div>
    )
  }
};

export default Redux.connect()(Main);
