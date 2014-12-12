(function(){

  App.Views.AddBook = Parse.View.extend({

    tagName: 'form',
    className: 'createForm',


    template        : _.template($('#addBookTemp').html()),

    events: {
      'click .addBookBtn': 'addBook',

    },

    initialize   : function (options) {
      this.options=options;
      this.render();
      $("#middle").html(this.$el);

    },

    render  : function () {
    $("#middle").empty();

      this.$el.html(this.template());

    },

    addBook : function (e) {

      e.preventDefault();

      if($('.bookTitle').val() === ""){
        alert('Please add a book title.');
      }
      else if($('.readingLevel').val() === ""){
        alert("Please put in a number for words per minute");
      }
      else if($('.pageCount').val() === ""){
        alert("please put in a number for pages");
      }
      else if($('.duration').val() === ""){
        alert("please put in a number for days");
      }
      else{

        var b = new App.Models.Book({
          title: $('.bookTitle').val(),
          readingLevel: $('.readingLevel').val(),
          pageCount: $('.pageCount').val(),
          duration: $('.duration').val(),
          user: App.user,
        });

        // Set Access Control List
        var bookACL = new Parse.ACL(App.user);
        bookACL.setPublicReadAccess(true);
        b.setACL(bookACL);

        b.save(null, {
          success: function () {
            App.books.add(b);
            new App.Views.Profile({user: App.user});
            App.router.navigate('profile', { trigger: true });
            location.reload();


          }
        });

      }

    }/*end of add book*/

  });

}());
