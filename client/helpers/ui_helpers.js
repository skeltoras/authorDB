//@since v0.3
UI.registerHelper('formatDate', function(date) {
  moment.locale("de");
  var globalLocale = moment();
  var localLocale = moment();
  
  localLocale.locale("de");
  return moment(date).format('DD.MM.YY HH:mm');
});
//@since v0.7.0
UI.registerHelper('formatMonth', function(month) {
  return moment(month, 'M').format('MMMM');
});