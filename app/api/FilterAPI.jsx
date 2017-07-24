var $ = require('jquery');

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

module.exports = {
  filterItems: function(items, status, searchText) {
    var filteredItems = items;

    filteredItems = statusFilter(filteredItems, status);
    filteredItems = titleFilter(filteredItems, searchText)

    return filteredItems;
  }
};
