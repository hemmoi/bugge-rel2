var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import moment from 'moment';

export class Comments extends React.Component {

    constructor (props) {
        super(props);
        this.handleAddComment = this.handleAddComment.bind(this);
        this.showComments = this.showComments.bind(this);
    }

    handleAddComment = (e) => {
        e.preventDefault();
        var {dispatch} = this.props;
        var newComment = {
            time: moment().format('DD/MM/YYYY, h:mm'),
            created: localStorage.getItem('firstName') + " " + localStorage.getItem('lastName'),
            commentText:this.refs.comment.value
        }
        dispatch(actions.addComment(newComment));
        this.refs.comment.value = "";
    }

    showComments = () => {
        var {comments} = this.props;
        if (!comments || comments.length == 0) {
            return (
                <p>There are no comments.</p>
            )
        } else {
            return comments.map((comment, index) => {
                return (
                    <div key={index}>
                            <div><strong> {comment.time} {comment.created }</strong> </div>
                            {comment.commentText}
                    </div>
                )
            });
        }
    }

   
    render() {

        var {openError} = this.props;

    return (


        <form id="comments-area" onSubmit={this.handleAddComment} >

            <div className="card card-inverse card-primary form-group-row">
                <div className="card-header">Comments</div>
                <div className="comment-history" >
                     {this.showComments()} 
                </div>
                <div className="card-text">
                    <textarea ref="comment" name="description" rows="3" className="form-input comment-input">
                    </textarea>              
                    <div>
                        <button className="btn btn-warning button-comment">Add comment</button>
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
        openError: state.openError,
        comments: state.comments
    };
  }
)(Comments);
