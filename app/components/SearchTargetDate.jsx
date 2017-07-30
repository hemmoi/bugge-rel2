var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import DatePicker from 'react-datepicker';
import moment from 'moment';

export class SearchTargetDate extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: ""
    };
    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChangeStart(date) {
    this.setState({startDate: date});
  }

  handleChangeEnd(date) {
    this.setState({endDate: date});
  }

  render() {
    var {searchTitle} = this.props;

    return (
      <div id="search-by-title">
        <div className="form-group">
          <label htmlFor="searchTitle"><h4>Search by target date</h4></label>
          <DatePicker
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
        searchTitle: state.searchTitle
    };
  }
)(SearchTargetDate);
