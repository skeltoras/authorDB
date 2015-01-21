//-- template created functions
Template.salesShow.created = function(){ 
};

//-- template destroyed functions
Template.salesShow.destroyed = function(){
};

//-- template rendered functions
Template.salesShow.rendered = function(){  
  if(Stats.find().count()>0){ 
    tplLoading = Blaze.render(Template.loading, document.getElementById('chartData'));
    Session.set('getData', 'ready');
    Session.set('Brockhaus', brockhausUnits);
    Session.set('Info3', info3Units);
    Session.set('AVA', avaUnits);
    Session.set('Summe', summeUnits);
          
    Meteor.setTimeout(function() {
      Blaze.remove(tplLoading);
      tplChartUnits = Blaze.render(Template.chartUnits, document.getElementById('chartData'));
      //tplChartVolumes = Blaze.render(Template.chartVolumes, document.getElementById('chartData'));
    }, 500);   
  } else {
    noData = Blaze.render(Template.noData, document.getElementById('chartData'));
    Session.set('getData', 'notReady');
  }
};

//-- template helpers
Template.salesShow.helpers({
  showYear: function() {
    return Session.get('year');
  },
  getData: function() {    
    year = Number(Session.get('year'));    
    brockhausUnits = Stats.findOne({seller: 'Brockhaus', year: year}).units;
    info3Units = Stats.findOne({seller: 'Info3', year: year}).units;
    avaUnits = Stats.findOne({seller: 'AVA', year: year}).units;
    summeUnits = Stats.findOne({seller: 'Summe', year: year}).units;    
  }
});

//-- template events
Template.salesShow.events({ 
  'change #years': function(e, tpl){
    e.preventDefault();
    
    var year = $('#years :selected').text();
    var bookId = Session.get('bookId');
    Session.set('year', year);
    Blaze.remove(tplChartUnits);
    Blaze.remove(tplChartVolumes);
    tplChartUnits = Blaze.render(Template.chartUnits, document.getElementById('chartData'));
    tplChartVolumes = Blaze.render(Template.chartVolumes, document.getElementById('chartData'));
  } 
});

//-- template rendered functions
Template.chartUnits.rendered = function(){
  Session.set('x', ['x', 'Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']);
  
  chartUnits = c3.generate({
    bindto: this.find('.chartUnits'),
    data: {
      xs: {
        'Brockhaus': 'x',
        'Info3': 'x',
        'AVA': 'x',
        'Summe': 'x',
      },
      columns: [
        ['x'],
        ['Brockhaus'],
        ['Info3'],
        ['AVA'],
        ['Summe']
      ],
      type: 'bar',
      types: {
        Summe: 'spline',
      },
    },
    axis: {
      x: {
        type: 'category',
          categories: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
      }
    },
    bar: {
      width: {
        ratio: 0.5 // this makes bar width 50% of length between ticks
      }
    }
  });

  this.autorun(function (tracker) {
    chartUnits.load({columns: [
      Session.get('x'),
      Session.get('Brockhaus'),
      Session.get('Info3'),
      Session.get('AVA'),
      Session.get('Summe'),
    ]});
  });
};

//-- template rendered functions
Template.chartVolumes.rendered = function(){
  chartVolumes = c3.generate({
    bindto: this.find('.chartVolumes'),
    data: {
      columns: [
        ['Brockhaus'],
        ['Info3'],
        ['AVA'],
        ['Summe']   
      ],
      type: 'bar',
      types: {
        Summe: 'spline',
      },
    },
    axis: {
      x: {
        type: 'category',
          categories: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
      }
    },
    bar: {
      width: {
        ratio: 0.5 // this makes bar width 50% of length between ticks
      }
    }
  });
  Meteor.setTimeout(function() {
    volumesBrockhaus = brockhaus.volumes;
    volumesInfo3 = info3.volumes;
    volumesAVA = ava.volumes;
    volumesSumme = summe.volumes;
    chartVolumes.load({
      columns: [
        volumesBrockhaus,
        volumesInfo3,
        volumesAVA,
        volumesSumme  
      ],
    });
  }, 500);
};

Template.chart.rendered = function () {
  Session.set('x', ['x', 'Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']);
  Session.set('data1', ['data1', 30, 200, 100, 400, 150]);
  Session.set('data2', ['data2', 20, 180, 240, 100, 190]);
  var chart = c3.generate({
    bindto: this.find('.chart'),
    data: {
      xs: {
        'data1': 'x',
        'data2': 'x'
      },
      columns: [['x'],['data1'],['data2']]
    },
    axis: {
    x: {
      type: 'category',
        categories: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
      }
    },
  });

  this.autorun(function (tracker) {
    chart.load({columns: [
      Session.get('x'),
      Session.get('data1'),
      Session.get('data2'),
      []
    ]});
  });
}