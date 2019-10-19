// Make sure we wait to attach our handlers until the DOM is fully loaded.
$("document").ready(function() {
  // setTimeout(() => {console.log(`Loaded`)},1000)
  console.log("Loaded");
  $(".eat-the-burger").on("click", function(event) {
    var id = $(this).attr('id');

    var consumedBurger = {
      id: id,
      devour: 1
    };

    console.log(consumedBurger)
    // Send the PUT request.
    $.ajax("/api/burgers/", {
      type: "PUT",
      data: consumedBurger
    }).then(function() {
      console.log("Burger has been successfully devoured.");
      location.reload();
    });
  });

  $("#addToMenu").on("click", function(event) {
    var newBurger = {
      name: $("#burgerName")
        .val()
        .trim()
    };
    console.log(newBurger);

    if (newBurger.name === "") {
      alertify
        .alert()
        .set("message", "Please enter a valid burger name.")
        .setHeader("Invalid Burger Name!")
        .show();
    } else {
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(function() {
        location.reload();
      });
    }
  });
});
