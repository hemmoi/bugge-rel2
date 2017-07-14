var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export class ErrorDetails extends React.Component {

    constructor (props) {
        super(props);
        this.findErrorById = this.findErrorById.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleSubmit(e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var newFormData = {
            title: this.refs.errorTitle.value,
            description: this.refs.errorDescription.value,
            steps: this.refs.errorSteps.value,
            comments: this.refs.errorComment.value,
            status: this.refs.errorStatus.value
        }

        if (this.props.params._id != 0) {
            dispatch(actions.updateError(this.props.params._id, newFormData));
        } else {
            dispatch(actions.addError(newFormData));
        }   
    }

    findErrorById(errors) {
        return errors._id === this.props.params._id;
    }

  render() {
    var {errors} = this.props;
    var formData = {
        title: "",
        description: "",
        steps: "",
        comments: "",
        status: ""
    };

    if (this.props.params._id != 0) {
        formData = errors.find(this.findErrorById);
    }

    return (
      <form onSubmit={this.handleSubmit} id="error-template">
          <div className="input-group input-group-lg form-buttons">
              <button type="submit" className="btn btn-success form-button">Save changes</button>
              <a href="#" className="btn btn-danger form-button">Close</a>
          </div>

          <div id="error-form">
              <div id="input-area">

                  <div className="form-group">
                      <div className="card card-inverse card-primary form-group-row">
                          <div className="card-header">Title</div>
                          <div className="card-text">
                              <input ref="errorTitle" defaultValue={formData.title} type="text" name="header" className="form-input" maxLength="60" required></input>
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

                      <div className="card card-inverse card-primary form-group-row">
                          <div className="card-header">Comment</div>
                          <div className="card-text">
                              <textarea ref="errorComment" defaultValue={formData.comments} name="description" rows="10" className="form-input">
                              </textarea>              
                              <div>
                                  {/*<button className="btn btn-warning">Add comment</button>*/}
                              </div>
                          </div>
                      </div>

                      {/*<div className="card card-inverse card-primary form-group-row">
                          <div className="card-header">Comment history</div>
                          <div className="card-text">
                              Panel content
                          </div>
                      </div>*/}

                  </div>

              </div>

              <div id="status-area">
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
                  </div>
              </div>

          </form>


    )
  }
};

export default connect(
  (state) => {
    return {
        errors: state.errors
    };
  }
)(ErrorDetails);
