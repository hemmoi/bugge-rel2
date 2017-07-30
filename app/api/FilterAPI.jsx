var $ = require('jquery');
import moment from 'moment';

function statusFilter(items, status) {
    return items.filter((item) => {
        if (!status.new 
                && !status.ongoing 
                && !status.resolved 
                && !status.closed 
                && !status.rejected ) {
                return true;
            } 
        else if (status.new && item.status == "new"){
            return true;
            }
        else if (status.ongoing && item.status == "ongoing"){
            return true;
            }
        else if (status.resolved && item.status == "resolved"){
            return true;
            }
        else if (status.closed && item.status == "closed"){
            return true;
            }
        else if (status.rejected && item.status == "rejected"){
            return true;
            }
        else {
            return false;
        }
    });    
}

function titleFilter(items, searchText) {
    return items.filter((item) => {
        if (item.title) {
            var title = item.title.toLowerCase();
            return searchText.length === 0 || title.indexOf(searchText.toLowerCase()) > -1;
        } else {
            return false;
        }  
    });
}

function createdByFilter(items, createdBy) {
    return items.filter((item) => {
        if (createdBy == "anyone" || !createdBy) {
            return true;
        } else if (item.createdBy.email == createdBy) {
            return true;
        } else {
            return false;
        }
    });    
}

function assignedToFilter(items, assignedTo) {
    return items.filter((item) => {
        if (assignedTo == "anyone" || !assignedTo) {
            return true;
        } else if (item.assignedTo == assignedTo) {
            return true;
        } else {
            return false;
        }
    });    
}

function targetDateStartFilter(items, startDate){
    return items.filter((item) => {
        if (startDate == null) {
            return true;
        } else if (moment(item.targetDate).isAfter(startDate)) {
            return true;
        } else {
            return false;
        }
    });    
}

function targetDateEndFilter(items, endDate){
    return items.filter((item) => {
        if (endDate == null) {
            return true;
        } else if (moment(item.targetDate).isBefore(endDate)) {
            return true;
        } else {
            return false;
        }
    });    
}

module.exports = {
  filterItems: function(items, status, searchText, createdBy, assignedTo, targetDate) {
    var filteredItems = items;

    filteredItems = statusFilter(filteredItems, status);
    filteredItems = titleFilter(filteredItems, searchText);
    filteredItems = createdByFilter(filteredItems, createdBy);
    filteredItems = assignedToFilter(filteredItems, assignedTo);
    filteredItems = targetDateStartFilter(filteredItems, targetDate.startDate);
    filteredItems = targetDateEndFilter(filteredItems, targetDate.endDate);

    return filteredItems;
  }
};
