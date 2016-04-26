$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    console.log(dancer);
    window.dancers.push(dancer);
    $('body').append(dancer.$node);

  });

  $('.addBlueDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name-2');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.addOrangeDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name-3');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  // $('.lineUpButton').on('click', function() {
  //   console.log('bang');
  //   $('.dancer, .blueDancer, .orangeDancer').animate({
  //     top: '50%'
  //   }, Math.random() * 4000, function() {
  //     //
  //   });
  // });

  $('.lineUpButton').on('click', function() {
    console.log('bang');
    for (var i = 0; i < window.dancers.length; i++) {

      $(window.dancers[i].$node).animate({
        top: '50%'
      }, Math.random() * 4000, function() {
        //
      });

    }

  });


});




