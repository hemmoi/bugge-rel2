var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import AlertContainer from 'react-alert';
import thunk from 'redux-thunk';
import Navbar from "Navbar";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Comments from 'Comments';

export class ErrorDetails extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            formData: {},
            loading: true,
            saved: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.showAlert = this.showAlert.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.loadFormData(); 
        this.alertOptions = {
            offset: 14,
            position: 'top left',
            theme: 'dark',
            time: 5000,
            transition: 'scale'
        };
    }

    showAlert = (alertType) => {
        var {message} = this.props.message;
        this.msg.show(message, {
        time: 2000,
        type: alertType,
        })
    }

    handleDateChange(date) {
        this.setState({
           formData: {targetDate: date}
        });
    }

    sendEmail = () => {
        var {formData, dispatch, openError} = this.props;
        var createdBy = openError.createdBy
        var currentUser = "";
        var newAssignedTo = "";
        var oldAssignedTo = "";

        // remove duplicate email addresses
        if (localStorage.getItem('email') != createdBy) {
            currentUser = localStorage.getItem('email');
        }

        if (this.refs.assignedTo.value != createdBy && 
            this.refs.assignedTo.value != currentUser) 
            { newAssignedTo = this.refs.assignedTo.value; }

        if (this.state.formData.assignedTo != createdBy && 
            this.state.formData.assignedTo != currentUser &&
            this.state.formData.assignedTo != newAssignedTo) 
            { oldAssignedTo = this.state.formData.assignedTo; }

        var email = {
            createdBy: createdBy,
            currentUser: currentUser,
            newAssignedTo: newAssignedTo,
            oldAssignedTo: oldAssignedTo,
            title: this.refs.errorTitle.value
        }
        dispatch(actions.sendEmail(email));
    }

    loadFormData = () => {
        var {dispatch} = this.props;

        //-------Load data for Assigned to selector
        if (this.props.allUsers.length == 0) {
            dispatch(actions.getAllUsers());
        }; 

        // -------- Load data for form ------------
        if (this.props.params._id != 0) {
            dispatch(actions.getOneError(this.props.params._id))
            .then((data) => {
                this.setState({
                    formData: data,
                    loading: false
                });
            });
        } else {
            dispatch(actions.clearComments());
            this.state = {
                formData: {targetDate: moment().add(1, 'weeks')},
                loading: false
            }
        };

    }

    handleSubmit(e) {
        e.preventDefault();
        var createdBy = {};
        var {dispatch, openError, newComments} = this.props;

        if (this.props.params._id != 0) {
            createdBy = openError.createdBy;
        } else {
            createdBy = {
                firstName: localStorage.getItem("firstName"),
                lastName: localStorage.getItem("lastName"),
                email: localStorage.getItem("email")
            };
        }
        var newFormData = {
            title: this.refs.errorTitle.value,
            description: this.refs.errorDescription.value,
            steps: this.refs.errorSteps.value,
            status: this.refs.errorStatus.value,
            assignedTo: this.refs.assignedTo.value,
            createdBy: createdBy,
            targetDate: this.state.formData.targetDate
        }

        if (openError._id != 0 ) {
            dispatch(actions.updateError(openError._id, newFormData))
            .then((status) => {
                if(status=="success") {
                    this.showAlert("success");
                    this.sendEmail();
                } else if (status == "failed"){
                    this.showAlert("error");
                }
            });

        } else {
            dispatch(actions.addError(newFormData))
            .then((status) => {
                if(status.status=="success") {
                    this.showAlert("success");
                    // Update reportID field in comments
                    dispatch(actions.updateReportId(status.reportId));
                    this.sendEmail();
                } else if (status.status == "failed"){
                    this.showAlert("error");
                }
            });
            
        }
        
    }

    handleClose() {
        var {dispatch} = this.props;
        dispatch(actions.clearOpenError());
    }

  render() {

    var {openError, allUsers} = this.props;
    var formData = this.state.formData;

    var listUsers = () => {
        return allUsers.map((user) => {
            return (
                <option key={user._id} value={user.email}>{user.firstName} {user.lastName}</option>
            )
        });
    }

    if (this.state.loading) {
        return (
        <div>
             <Navbar/>
             <div className="alert alert-info" role="alert">
                 <strong>Loading data...</strong>
             </div>
        </div>
        )
    } else {

    return (
        <div>
            <Navbar/>
            <form onSubmit={this.handleSubmit} id="error-template">
            <div className="input-group input-group-lg form-buttons">
                <div>
                    <button type="submit" className="btn btn-success form-button">Save changes</button>
                    <a href="#" className="btn btn-danger form-button" onClick={this.handleClose}>Close</a>
                    <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                </div>
            </div>

            <div className="form-block">
                <div className="input-area">

                    <div className="form-group">
                        <div className="card card-inverse card-primary form-group-row">
                            <div className="card-header">Title</div>
                            <div className="card-text">
                                <input ref="errorTitle" defaultValue={formData.title} type="text" name="header" className="form-input" maxLength="60" required/>
                            </div>
                        </div>

                        <div className="card card-inverse card-primary form-group-row">
                            <div className="card-header">Description</div>
                            <div className="card-text">
                                <textarea ref="errorDescription" defaultValue={formData.description} name="description" rows="5" className="form-input">
                                </textarea>
                            </div>
                        </div>

                        <div className="card card-inverse card-primary form-group-row">
                            <div className="card-header">Steps to reproduce</div>
                            <div className="card-text">
                                <textarea ref="errorSteps" defaultValue={formData.steps} name="description" rows="20" className="form-input">

                                </textarea>
                            </div>
                        </div>

                    </div>

                </div>

                <div id="selections-area">
                    <div className="card card-inverse card-primary form-group-row">
                        <div className="card-header">Status</div>
                            <div className="card-text">
                                <div className="form-group">
                                    <select className="form-control" id="status-selection" ref="errorStatus" defaultValue={formData.status}>
                                        <option value="new">New</option>
                                        <option value="ongoing">Ongoing</option>
                                        <option value="resolved">Resolved</option>
                                        <option value="closed">Closed</option>
                                        <option value="rejected">Rejected</option>
                                    </select>
                                </div> 
                            </div>
                    </div>
                    
                    <div id="assign-to-area">
                        <div className="card card-inverse card-primary form-group-row">
                            <div className="card-header">Assign to</div>
                            <div className="card-text">
                                <div className="form-group">
                                    <select className="form-control" id="assign-to-selection" ref="assignedTo" defaultValue={formData.assignedTo}>
                                    {listUsers()}
                                    </select>
                                </div> 
                            </div>
                        </div>
                    </div>

                    <div id="target-date-area">
                        <div className="card-inverse card-primary target-date">
                            <div className="card-header">Target date</div>
                            <div>
                                <DatePicker
                                    className="form-control"
                                    dateFormat="DD/MM/YYYY"
                                    selected={moment(formData.targetDate)} 
                                    onChange={this.handleDateChange}
                                />
                            </div>
                        </div>
                    </div>



                </div>
            </div>
          </form>
          <div className="form-block">
            <Comments className="input-area" reportId={this.props.params._id}/>
          </div>
        </div>

    )
    }
  }
};

export default connect(
  (state) => {
    return {
        openError: state.openError,
        message: state.message,
        allUsers: state.allUsers,
        newComments: state.newComments
    };
  }
)(ErrorDetails);
