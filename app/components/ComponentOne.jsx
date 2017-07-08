var React = require('react');
var {connect} = require('react-redux');

export class ComponentOne extends React.Component {

  render() {

    return (
      <div>
        <div>
          <h3>Component One</h3>
          <button className="btn btn-success">Button</button>
        </div>
        <div className="alert alert-success" role="alert">
          <strong>Well done!</strong> You successfully read this important alert message.
        </div>
      </div>
    )
  }
};

export default connect(
  (state) => {
    return state;
  }
)(ComponentOne);
