//@since v0.3
UI.registerHelper('formatDate', function(date) {
  /*
  moment.locale("de");
  var globalLocale = moment();
  var localLocale = moment();
  
  localLocale.locale("de");
  return moment(date).format('DD.MM.YY HH:mm');
  */
  return moment(date).format('DD.MM.YY');
});
//@since v0.7.0
UI.registerHelper('formatMonth', function(month) {
  return moment(month, 'M').format('MMMM');
});
//@since v0.8.0
UI.registerHelper('formatCurrency', function(value) {
  return value.toFixed(2)
});