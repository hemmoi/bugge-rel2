var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export class Filters extends React.Component {

  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    var {dispatch} = this.props;
    var filters = {
      new: this.refs.new.checked, 
      ongoing: this.refs.ongoing.checked, 
      resolved: this.refs.resolved.checked, 
      closed: this.refs.closed.checked, 
      rejected: this.refs.rejected.checked 
    };
    dispatch(actions.updateFilters(filters));
  }

  render() {

    return (
      <div id="error-filter">
          <h2>Filter errors</h2>
          <div className="filter-group">
            <div className="check-filter">
              <input type="checkbox" ref="new" className="checkbox" onChange={this.handleChange}></input>
              <span className="check-filter-title">New</span>
            </div>
            <div className="check-filter">
            <input type="checkbox" ref="ongoing" className="checkbox" onChange={this.handleChange}></input>
              <span className="check-filter-title">Ongoing</span>
            </div>
            <div className="check-filter">
              <input type="checkbox" ref="resolved" className="checkbox" onChange={this.handleChange}></input>
              <span className="check-filter-title">Resolved</span>
            </div>
            <div className="check-filter">
              <input type="checkbox" ref="closed" className="checkbox" onChange={this.handleChange}></input>
              <span className="check-filter-title">Closed</span>
            </div>
            <div className="check-filter">
              <input type="checkbox" ref="rejected" className="checkbox" onChange={this.handleChange}></input>
              <span className="check-filter-title">Rejected</span>
            </div>
          </div>
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
