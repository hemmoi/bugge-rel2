var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');


export class AssignedTo extends React.Component {

    constructor (props) {
        super(props);
        var {dispatch} = this.props;
        if (this.props.allUsers.length == 0) {
            dispatch(actions.getAllUsers());
        }                
    }

   
    loadAllUsers = () => {
        var {dispatch} = this.props;
        
    }

    handleSelection() {
        
    }

  render() {


    return (
        <div id="assign-to-area">
            <div className="card card-inverse card-primary form-group-row">
                <div className="card-header">Assign to</div>
                    <div className="card-text">
                        <div className="form-group">
                            <select className="form-control" id="assign-to-selection" ref="errorStatus" >
                                <option value="new">New</option>
                                <option value="ongoing">Ongoing</option>
                                <option value="resolved">Resolved</option>
                                <option value="closed">Closed</option>
                                <option value="rejected">Rejected</option>
                            </select>
                        </div> 
                    </div>
            </div>
        </div>
        )
    }
}


export default connect(
  (state) => {
    return {
        allUsers: state.allUsers
    };
  }
)(AssignedTo);
