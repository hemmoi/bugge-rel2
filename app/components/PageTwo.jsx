var React = require('react');
var {connect} = require('react-redux');

export class PageTwo extends React.Component {

  render() {

    return (
      <div>
        Page Two
      </div>
    )
  }
};

export default connect(
  (state) => {
    return state;
  }
)(PageTwo);
