var React = require('react');
var {Link, IndexLink} = require('react-router');
var {connect} = require('react-redux');


export class Navbar extends React.Component {

  constructor (props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    console.log("logout button");
    localStorage.clear();
  }

 
  render () {
    var firstName = localStorage.getItem('firstName');

    return (

      <div className="header">
          <div id="title" className="header-left">
            <img id="logo" src="/images/bugge.png"></img>
            <h1>Bugge</h1>
          </div>
          <div className="header-rigth">
            <span>Hello, {firstName} </span> 
            <IndexLink  className="btn btn-primary" 
                        id="logout-button" 
                        onClick={this.logout} 
                        to={"/signin"}>
                Logout
            </IndexLink>
          </div>
      </div>
    );
  }

};

export default connect()(Navbar);