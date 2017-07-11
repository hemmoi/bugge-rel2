var React = require('react');
var {Link, IndexLink} = require('react-router');
var {connect} = require('react-redux');


export class Navbar extends React.Component {

  render () {
    return (
      <div id="title">
        <img id="logo" src="logo.jpg"></img>
        <h1>Bugge</h1>
      </div>
    );
  }

};

export default connect()(Navbar);