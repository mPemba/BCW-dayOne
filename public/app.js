var app = angular.module('bcwDayOne', []);

function mainController() {
  var count = 0;
  $('.upButton').on('click', function() {
    count += 1;

    $('#count').html(count);
  });

  $('.leapButton').on('click', function() {
    getAge("19900901");
  });



  function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    $('#leapYear').html(age);
    return age;
    }



}
