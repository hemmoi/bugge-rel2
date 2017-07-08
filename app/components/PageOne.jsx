var React = require('react');
var {connect} = require('react-redux');

export class PageOne extends React.Component {

  render() {

    return (
      <div>
        Page One
      </div>
    )
  }
};

export default connect(
  (state) => {
    return state;
  }
)(PageOne);
