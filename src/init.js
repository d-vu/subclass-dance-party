$(document).ready(function() {
  window.dancers = [];
  window.bmo = [];
  window.counter = 0;

  // while(true){
  //   setTimeout(function(){

  //     ,100)

  // }

  // setInterval(function(){ 
  //   for (var i = 0; i < window.dancers.length; i++){
  //     var distance = window.dancer[i].top 
  //     if ()
  //   }

   // }, 3000);

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * 0,
      Math.random() * 1000
    );
    console.log(dancer);
    window.bmo.push(dancer);
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

      window.dancers[i].top = window.innerHeight * 0.65;
      $(window.dancers[i].$node).animate({
        top: '65%'
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

  var checkCollision = function() {
    var threshold = 75; //px
    window.bmo.forEach(function(bmo) {
      for (var i = 0; i < window.dancers.length; i++) {
        var distance = Math.sqrt( Math.pow((bmo.left - window.dancers[i].left), 2) + Math.pow((bmo.top - window.dancers[i].top), 2 ));
        if (distance < threshold) {
          $(window.dancers[i].$node).fadeOut();
          window.counter++;
          document.getElementById('count').innerHTML = window.counter;
        } 
      }
    });  
  };

  setInterval(function() {
    checkCollision(); 
  }, 500);


});




