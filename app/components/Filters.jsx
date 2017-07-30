var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import StatusFilter from "StatusFilter";
import SearchTitle from "SearchTitle";
import SearchUser from "SearchUser";
import SearchTargetDate from "SearchTargetDate";

export class Filters extends React.Component {

  constructor (props) {
    super(props);
    this.clearFilters = this.clearFilters.bind(this);
    this.clearFilters();
    this.loadFilterData();
  }

  clearFilters = () => {
    var {dispatch} = this.props;
    var statusFilters = {
      new: false, 
      ongoing: false, 
      resolved: false, 
      closed: false, 
      rejected: false 
    };
    dispatch(actions.updateStatusFilter(statusFilters));
    dispatch(actions.searchTitleFilter(""));
    dispatch(actions.createdByFilter(""));
    dispatch(actions.assignedToFilter(""));
    dispatch(actions.targetDateFilter(null, null));    
  }

  loadFilterData = () => {
    // ----------- load all users ---------------
    var {dispatch} = this.props;
    if (this.props.allUsers.length == 0) {
        dispatch(actions.getAllUsers());
    }; 
  }

  render() {
    var {filters} = this.props;

    return (
      <div id="error-filter">
          <h2>Filter errors</h2>
          <StatusFilter/>
          <SearchTitle/>
          <SearchTargetDate/>
          <SearchUser type="createdBy"/>
          <SearchUser type="assignedTo"/>
      </div>
    )
  }
};

export default connect(
  (state) => {
    return {
        allUsers: state.allUsers,
        // statusFilters: state.statusFilters,
        // searchTitle: state.searchTitle,
        // createdBy: state.createdBy,
        // assignedTo
    };
  }
)(Filters);
