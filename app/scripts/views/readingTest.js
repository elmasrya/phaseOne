(function () {

/*parse view*/
  App.Views.Test = Parse.View.extend({


    el                : '#middle',

    template          : _.template($('#testTemp').html()),

    events: {
      'click .start' : 'start'

    }, // end of events


    initialize: function () {
      this.render();

    },

    render: function () {
      this.$el.html(this.template);

    },

    start: function () {
      $('.readingTest').css("display","block");
    }


  });

}());
