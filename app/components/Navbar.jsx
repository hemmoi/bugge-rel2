var React = require('react');
var {Link, IndexLink} = require('react-router');
var {connect} = require('react-redux');


export class Navbar extends React.Component {

  render () {
    return (
        <div>Navbar</div>
    );
  }

};

export default connect()(Navbar);