var React = require('react');
var {Link, IndexLink} = require('react-router');
var {connect} = require('react-redux');


export class HelloNavbar extends React.Component {

 
  render () {
    return (

      <div className="header">
          <div id="title" className="header-left">
            <img id="logo" src="/images/bugge.png"></img>
            <h1>Welcome to Bugge</h1>
          </div>
      </div>
    );
  }

};

export default connect()(HelloNavbar);