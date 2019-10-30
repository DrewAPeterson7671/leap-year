$(document).ready(function() {

  $("#userInput").submit(function() {
    event.preventDefault();
    console.log(userYear);


    var userYear = $("input#userYear").val();

    var leapYear = function(userYear) {

      if ( userYear % 4 === 0 || userYear % 400 === 0 && userYear % 100 !== 0)  {

        return true;
      }
    };

console.log(leapYear(userYear));

    if(leapYear() !== true){
      $("#sad").show();
    }else{
      $("#happy").show();
    }
  });
});
