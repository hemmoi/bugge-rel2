var React = require('react');
var {connect} = require('react-redux');
var {Link, IndexLink} = require('react-router');
var actions = require('actions');
var FilterAPI = require('FilterAPI');

import Filters from "Filters";
import ErrorItem from "ErrorItem";
import Navbar from "Navbar";

export class ErrorListing extends React.Component {

  constructor (props) {
    super(props);
    var {dispatch} = this.props;
    if (this.props.errors.length == 0) {
      dispatch(actions.getErrorsFromDb());
    }
  }


  render() {
    var {errors} = this.props;
    var {filters} = this.props;

    var filteredErrors = FilterAPI.filterItems(errors, filters);

    var renderErrors = () => {
        return filteredErrors.map((error) => {
            return (
                <ErrorItem key={error._id} {...error}></ErrorItem>
            )
        });
    };

    return (
      <div>
        <Navbar/>
        <div id="overview">
          <div id="error-list">
            <IndexLink className="btn btn-success" id="new-button" to="/details/0">
              +Create New
            </IndexLink>
              {renderErrors()}
          </div>
          <div>
          <Filters/>
          </div>
        </div>
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
