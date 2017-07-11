var React = require('react');
var {connect} = require('react-redux');
import Filters from "Filters";
import ErrorItem from "ErrorItem";

export class ErrorListing extends React.Component {

  constructor (props) {
    super(props);
        // this.state = {
        //     errors: [
        //             {
        //                 id: 1,
        //                 title: "Error one",
        //                 description: "some description",
        //                 steps: "steps to reproduce",
        //                 comments: "some comments",
        //                 status: "New"
        //             },
        //             {
        //                 id: 2,
        //                 title: "Error two",
        //                 description: "some description",
        //                 steps: "steps to reproduce",
        //                 comments: "some comments",
        //                 status: "New"
        //             },
        //             {
        //                 id: 3,
        //                 title: "Error three",
        //                 description: "some description",
        //                 steps: "steps to reproduce",
        //                 comments: "some comments",
        //                 status: "New"
        //             }
        //             ]
        // };
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
            <button className="btn btn-success" id="new-button">+Create new</button>
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
