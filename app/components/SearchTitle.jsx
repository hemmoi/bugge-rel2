var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export class SearchTitle extends React.Component {

  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    var {dispatch} = this.props;
    var searchText = this.refs.searchText.value; 
    dispatch(actions.searchTitleFilter(searchText));
  }

  render() {
    var {searchTitle} = this.props;

    return (
      <div id="search-by-title">
        <div className="form-group">
          <label htmlFor="searchTitle"><h4>Search by title</h4></label>
          <input type="text" ref="searchText" className="form-control" value={searchTitle} id="search-title-input" onChange={this.handleChange}/>
        </div>
      </div>
    )
  }
};

export default connect(
  (state) => {
    return {
        searchTitle: state.searchTitle
    };
  }
)(SearchTitle);
