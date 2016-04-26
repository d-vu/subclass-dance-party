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

    $('.gifs').mouseover(function() {
      $(this).animate({
        width: '+=20',
        height: '+=20'
      }, 1);
    }).mouseleave(function() {
      $(this).animate({
        width: '-=20',
        height: '-=20'
      }, 1);
    });    
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

    $('.food').mouseover(function() {
      $(this).animate({
        width: '+=20',
        height: '+=20'
      }, 1);
    }).mouseleave(function() {
      $(this).animate({
        width: '-=20',
        height: '-=20'
      }, 1);
    });
  });

//line up dancer methods
  $('.lineUpButton').on('click', function() {
    console.log('bang');
    for (var i = 0; i < window.dancers.length; i++) {
      $(window.dancers[i].$node).animate({
        top: '50%'
      }, Math.random() * 3000 + 1500, function() {
        //
      });
    }
  });

//feed Jake method
  $('.feedJakeButton').on('click', function() {
    $('.orangeDancer').animate({
      top: '41%',
      left: '67%'
    }, 1000, function() {
      $('.orangeDancer').fadeOut('slow', function() {
        $('.boom').css('visibility', 'visible').delay(400).fadeOut();
      });
    });
  });

});




