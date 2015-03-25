// - Select2 list for template adShow
Template.listYears.helpers({
  listYears: function(){
    firstYear = '2013';
    currYear = moment().year();
    years = currYear - firstYear;
    listItem = [];
    listItem += ['<option data-placeholder="true">Jahr wählen</option>'];    
    for(i=0; i<=years; i++){
      yearItem = currYear - i;
      //if(currYear == yearItem) {
      //  listItem += ['<option value="' + yearItem + '" selected="selected">' + yearItem + '</option>'];  
      //} else {
        listItem += ['<option value="' + yearItem + '">' + yearItem + '</option>'];  
      //}          
    }
    return listItem;
  }
});