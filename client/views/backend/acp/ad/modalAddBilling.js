//-- template created functions
Template.modalAddBilling.created = function(){
  Session.set('modalAddBilling', false); 
};

//-- template destroyed functions
Template.modalAddBilling.destroyed = function(){
};

//-- template rendered functions
Template.modalAddBilling.rendered = function(){
};

//-- template helpers
Template.modalAddBilling.helpers({
});

//-- template events
Template.modalAddBilling.events({ 
  // save form on submit
  'submit #formAddBilling': function(e) {
    e.preventDefault();
    
    var authorId = this._id;
    var billingData = [];
    var billing = [];
    var sum = Session.get('getSum');
    var text = $(e.target).find('[name=text]').val();
    var units = $(e.target).find('[name=units]').val();
    var fee = $(e.target).find('[name=fee]').val();
    fee = Number(fee.replace( /,/,"." ));
    var sumUnits = Number(sum['sumUnits']) + Number(units);
    var sumFee = Number(sum['sumFee'].replace( /,/,"." )) + fee;
    fee = fee.toFixed(2);
    fee = fee.toString();
    fee = fee.replace(".", ",");
    sumFee = sumFee.toFixed(2);
    sumFee = sumFee.toString();
    sumFee = sumFee.replace(".", ",");
      
    hasBillingData = {
      sumUnits: sumUnits,
      sumFee: sumFee   
    }
    
    var bookId = $('#bookList :selected').val();
    
    billingData = {
      text: text,
      units: units,
      fee: fee
    };
    
    Session.set('getSum', hasBillingData);
    
    Meteor.call('updateBillings', bookId, billingData, function(error, result) {
      if(result){
        var getBillingData = BillingsTemp.find().fetch();
        Session.set('getBillData', getBillingData);
      }
    });
    
    document.getElementById("formAddBilling").reset();    
    Session.set('modalAddBilling', false);
    $('#addBilling').modal('toggle');
  }
});