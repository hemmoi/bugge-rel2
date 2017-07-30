var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import DatePicker from 'react-datepicker';
import moment from 'moment';

export class SearchTargetDate extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
    this.dispatchChange = this.dispatchChange.bind(this);
  }

  handleChangeStart(date) {
    this.setState({startDate: date});
    this.dispatchChange(date, this.state.endDate);
  }

  handleChangeEnd(date) {
    this.setState({endDate: date});
    this.dispatchChange(this.state.startDate, date);
  }

  dispatchChange(startDate, endDate) {
    var {dispatch} = this.props;
    dispatch(actions.targetDateFilter(startDate, endDate));
  }

  render() {
    var {searchTitle} = this.props;

    return (
      <div id="search-by-title">
        <div className="form-group">
          <label htmlFor="searchTitle"><h4>Search by target date</h4></label>
          <DatePicker
              dateFormat="DD/MM/YYYY"
              className="form-control"
              selected={this.state.startDate}
              selectsStart
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              onChange={this.handleChangeStart}
              placeholderText="Target date after"
              isClearable={true}
          />

        <DatePicker
            dateFormat="DD/MM/YYYY"
            className="form-control"
            selected={this.state.endDate}
            selectsEnd
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.handleChangeEnd}
            placeholderText="Target date before"
            isClearable={true}
        />

        </div>
      </div>
    )
  }
};

export default connect(
  (state) => {
    return {
        searchTargetDate: state.searchTargetDate
    };
  }
)(SearchTargetDate);
