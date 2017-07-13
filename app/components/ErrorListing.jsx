var React = require('react');
var {connect} = require('react-redux');
var {Link, IndexLink} = require('react-router');

import Filters from "Filters";
import ErrorItem from "ErrorItem";

export class ErrorListing extends React.Component {

  constructor (props) {
    super(props);
    this.statusFilter = this.statusFilter.bind(this);
    this.filteredErrors = this.filteredErrors.bind(this);
  }

  statusFilter(error) {
    var {filters} = this.props;
    if (!filters.new 
      && !filters.ongoing 
      && !filters.resolved 
      && !filters.closed 
      && !filters.rejected ) {
        return true;
      } 
    else if (filters.new && error.status == "new"){
        return true;
      }
    else if (filters.ongoing && error.status == "ongoing"){
        return true;
      }
    else if (filters.resolved && error.status == "resolved"){
        return true;
      }
    else if (filters.closed && error.status == "closed"){
        return true;
      }
    else if (filters.rejected && error.status == "rejected"){
        return true;
      }
    else {
      return false;
    }
  }

  filteredErrors() {
    var {errors} = this.props;
    return errors.filter(this.statusFilter);
  }

  render() {

    var renderErrors = () => {
        return this.filteredErrors().map((error) => {
            return (
                <ErrorItem key={error.id} {...error}></ErrorItem>
            )
        });
    };

    return (
    <div id="overview">
        <div id="error-list">
          <IndexLink className="btn btn-success" id="new-button" to="/details/0">
            +Create New
          </IndexLink>
            {renderErrors()}
        </div>
        <Filters></Filters>
      </div>
    )
  }
};

export default connect(
  (state) => {
    return {
        errors: state.errors,
        filters: state.filters
    };
  }
)(ErrorListing);
