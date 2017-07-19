var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import AlertContainer from 'react-alert';

export class SignIn extends React.Component {

    constructor (props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showAlert = this.showAlert.bind(this);
        this.alertOptions = {
            offset: 14,
            position: 'top left',
            theme: 'dark',
            time: 5000,
            transition: 'scale'
        }
    }

    showAlert = () => {
        var {message} = this.props.message;
        this.msg.show(message, {
        time: 2000,
        type: 'success',
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        var {dispatch} = this.props;
                    
        var submitData = {
            email: this.refs.email.value,
            password: this.refs.password.value,
        };
                    
        dispatch(actions.getUser(submitData))
            .then(() => {
                this.showAlert();
        });
    }
    
  render () {
    return (
        <div className="col-md-8 col-md-offset-2">
            <form id="signupForm" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" ref="email" required/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className="form-control" ref="password" required/>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        </div>      
    )
  }
};

export default connect(
    (state) => {
        return {
            message: state.message
        };
    }
)(SignIn);
