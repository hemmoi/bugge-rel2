var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import StatusFilter from "StatusFilter";
import SearchTitle from "SearchTitle";

export class Filters extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {
    var {filters} = this.props;

    return (
      <div id="error-filter">
          <h2>Filter errors</h2>
          <StatusFilter/>
          <SearchTitle/>
      </div>
    )
  }
};

export default connect(
  (state) => {
    return {
        filters: state.filters
    };
  }
)(Filters);
