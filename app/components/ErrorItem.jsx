var React = require('react');
var {connect} = require('react-redux');
var {Link, IndexLink} = require('react-router');

export class ErrorItem extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {
    var {details} = this.props;

    return (
            <div className="list-item">
                <div className="list-item-left">
                    <h3>{this.props.title}</h3>
                    <span> {this.props.description} </span>
                </div>
                <div className="list-item-right">
                    <h3>{this.props.status}</h3>
                    <IndexLink className="btn btn-warning" id="details-page" to={"/details/" + this.props._id}>
                      Open
                    </IndexLink>
                </div>
            </div>
    )
  }
};

export default connect(
  (state) => {
    return state;
  }
)(ErrorItem);
