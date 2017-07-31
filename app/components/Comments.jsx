var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import moment from 'moment';

export class Comments extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            comments: {},
            loading: true,
        }
        this.handleAddComment = this.handleAddComment.bind(this);
        this.showComments = this.showComments.bind(this);
        this.loadFormData(); 
    }

    loadFormData = () => {
        var {dispatch} = this.props;


        // -------- Load comments for the open report ------------
        if (this.props.reportId != 0) {
            dispatch(actions.getComments(this.props.reportId))
            .then((data) => {
                this.setState({
                    comments: data,
                    loading: false
                });
            });
        } else {
            this.state = {
                comments: {},
                loading: false
            }
        };
    }


    handleAddComment = (e) => {
        e.preventDefault();
        var {dispatch} = this.props;
        var comment = {
            reportId: this.props.reportId,
            time: moment().format('DD/MM/YYYY, h:mm'),
            created: localStorage.getItem('firstName') + " " + localStorage.getItem('lastName'),
            commentText:this.refs.comment.value
        }
        dispatch(actions.addComment(comment));
        this.refs.comment.value = "";
    }

    showComments = () => {
        var {comments} = this.props;
        if (this.state.loading) {
            return (
               <p>Loading comments...</p>
            )
        }
        else if (!comments || comments.length == 0) {
            return (
                <p>There are no comments.</p>
            )
        } else {
            return comments.map((newComment, index) => {
                return (
                    <div key={index}>
                            <div><strong> {newComment.time} {newComment.created }</strong> </div>
                            {newComment.commentText}
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
