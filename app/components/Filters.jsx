var React = require('react');
var {connect} = require('react-redux');

export class Filters extends React.Component {

  render() {

    return (
      <div id="error-filter">
          <h2>Filter errors</h2>
          <div className="filter-group">
            <div className="check-filter">
              <span className="checkbox"></span>
              <span className="check-filter-title">New</span>
            </div>
            <div className="check-filter">
              <span className="checkbox"></span>
              <span className="check-filter-title">Ongoing</span>
            </div>
            <div className="check-filter">
              <span className="checkbox"></span>
              <span className="check-filter-title">Resolved</span>
            </div>
            <div className="check-filter">
              <span className="checkbox"></span>
              <span className="check-filter-title">Closed</span>
            </div>
            <div className="check-filter">
              <span className="checkbox"></span>
              <span className="check-filter-title">Rejected</span>
            </div>
          </div>
      </div>
    )
  }
};

export default connect(
  (state) => {
    return state;
  }
)(Filters);
