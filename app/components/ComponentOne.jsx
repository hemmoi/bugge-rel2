var React = require('react');
var {connect} = require('react-redux');

export class ComponentOne extends React.Component {

  render() {

    return (
      <div>
        Component One
      </div>
    )
  }
};

export default connect(
  (state) => {
    return state;
  }
)(ComponentOne);
