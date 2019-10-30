$(document).ready(function() {

  $("#userInput").submit(function() {
    event.preventDefault();
    // console.log(userYear);


    var userYear = $("input#userYear").val();

    var leapYear = function(placeholder) {

      if ( placeholder % 4 === 0 || (placeholder % 400 === 0 && placeholder % 100 !== 0))  {

        return true;
      } else {
        return false;
      }
    };


    if (!leapYear(userYear)){
//(leapYear !== true)ß
      console.log("test");

      $("#sad").show();
      $("#happy").hide();
    } else {
      console.log("else");
      $("#sad").hide();
      $("#happy").show();
    }
  });
});
