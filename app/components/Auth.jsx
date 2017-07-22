import React from 'react';
import * as Redux from 'react-redux';

import * as actions from "actions";
import HelloNavbar from 'HelloNavbar';


export class Auth extends React.Component {
  constructor (props) {
    super(props);
  }


  render () {
    
    return (
      <div>
        <HelloNavbar/>
        <div>
          {console.log(this.props.children)}
          {this.props.children}
        </div>
      </div>
    )
  }
};

export default Redux.connect()(Auth);
