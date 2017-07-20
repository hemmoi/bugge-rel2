var React = require('react');
var {Link, IndexLink} = require('react-router');
var {connect} = require('react-redux');


export class Navbar extends React.Component {

  constructor (props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.logoutButton = this.logoutButton.bind(this);
  }

  logout() {
    console.log("logout button");
    localStorage.clear();
  }

  logoutButton() {
    console.log(localStorage.getItem('token'));
    if (localStorage.getItem('token')) {
      console.log("logout button");
      return (
        <div>
          <span>Hello </span>
          <IndexLink className="btn btn-success " id="logout-button" onClick={this.logout} to={"/signin"}>Logout</IndexLink>
        </div>
      );
    }
  }
 
  render () {
    return (

      <div className="header">
          <div id="title" className="header-left">
            <img id="logo" src="/images/bugge.png"></img>
            <h1>Bugge</h1>
          </div>
          <div className="header-rigth">
            {this.logoutButton()}
          </div>
      </div>
    );
  }

};

export default connect()(Navbar);