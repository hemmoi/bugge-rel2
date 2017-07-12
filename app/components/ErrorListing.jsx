var React = require('react');
var {connect} = require('react-redux');
var {Link, IndexLink} = require('react-router');

import Filters from "Filters";
import ErrorItem from "ErrorItem";

export class ErrorListing extends React.Component {

  constructor (props) {
    super(props);
  }


  render() {
    var {errors} = this.props;
    var renderErrors = () => {
        return  errors.map((error) => {
            return (
                <ErrorItem key={error.id} {...error}></ErrorItem>
            )
        });
    };

    return (
    <div id="overview">
        <div id="error-list">
          <IndexLink className="btn btn-success" id="details-page" to="/details/0">
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
        errors: state.errors
    };
  }
)(ErrorListing);
