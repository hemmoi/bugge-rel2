var React = require('react');
var {connect} = require('react-redux');

export class ErrorDetails extends React.Component {

  render() {

    return (
      <div id="error-template">
          <div className="input-group input-group-lg form-buttons">
              <button className="btn btn-success form-button">Save changes</button>
              <button className="btn btn-danger form-button">Close</button>
          </div>

          <div id="error-form">
              <div id="input-area">

                  <div className="form-group">
                      <div className="card card-inverse card-primary form-group-row">
                          <div className="card-header">Title</div>
                          <div className="card-text">
                              <input type="text" name="header" className="form-input" maxlength="60" required></input>
                          </div>
                      </div>

                      <div className="card card-inverse card-primary form-group-row">
                          <div className="card-header">Description</div>
                          <div className="card-text">
                              <textarea name="description" rows="5" className="form-input">Short description of the issue.
                              </textarea>
                          </div>
                      </div>

                      <div className="card card-inverse card-primary form-group-row">
                          <div className="card-header">Steps to reproduce</div>
                          <div className="card-text">
                              <textarea name="description" rows="20" className="form-input">
              - Steps to Reproduce: Minimized, easy-to-follow steps that will trigger the described problem. Include any special setup steps.

              - Actual Results: What the application did after performing the above steps.

              - Expected Results: What the application should have done, if there was no bug.

                              </textarea>
                          </div>
                      </div>

                      <div className="card card-inverse card-primary form-group-row">
                          <div className="card-header">Comment</div>
                          <div className="card-text">
                              <textarea name="description" rows="10" className="form-input">
                              </textarea>              
                              <div>
                                  <button className="btn btn-warning">Add comment</button>
                              </div>
                          </div>
                      </div>

                      <div className="card card-inverse card-primary form-group-row">
                          <div className="card-header">Comment history</div>
                          <div className="card-text">
                              Panel content
                          </div>
                      </div>

                  </div>

              </div>

              <div id="status-area">
                  <div className="card card-inverse card-primary form-group-row">
                      <div className="card-header">Status</div>
                          <div className="card-text">
                              <div className="form-group">
                                  <select className="form-control" id="status-selection">
                                      <option>New</option>
                                      <option>Ongoing</option>
                                      <option>Resolved</option>
                                      <option>Closed</option>
                                      <option>Rejected</option>
                                  </select>
                              </div> 
                          </div>
                      </div>
                  </div>
              </div>

          </div>


    )
  }
};

export default connect(
  (state) => {
    return state;
  }
)(ErrorDetails);
