var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export class SearchUser extends React.Component {

  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange() {
    var {type, dispatch} = this.props;
    if (this.props.type == "createdBy") {
      dispatch(actions.createdByFilter(this.refs.createdBy.value));
    } else if (this.props.type == "assignedTo") {
      dispatch(actions.assignedToFilter(this.refs.assignedTo.value));
    }
  }

  render() {

    var {type, allUsers} = this.props;
    var title = "";

    var listUsers = () => {
        return allUsers.map((user) => {
            return (
                <option key={user._id} value={user.email}>{user.firstName} {user.lastName}</option>
            )
        });
    }
      console.log("type: " +  this.props.type);

    if (this.props.type == "createdBy") {
      title = "Created by";
    } else if (this.props.type == "assignedTo") {
      title = "Assigned to";
    }

    return (
      <div id="search-by-title">
        <div className="form-group">
          <label htmlFor="searchTitle"><h4>{title}</h4></label>
          <div className="form-group">
            <select className="form-control" id="assign-to-selection" ref={this.props.type} onChange={this.handleChange}>
              <option value="anyone">Anyone</option>
              {listUsers()}
            </select>
          </div>
        </div>
      </div>
    )
  }
};

export default connect(
  (state) => {
    return {
        allUsers: state.allUsers
    };
  }
)(SearchUser);
