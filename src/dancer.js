// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {


  this.imageList = ['<img class =\"southpark\" src=\"./img/cartman.png\">', '<img class =\"animals\" src=\"./img/penguin.png\">'];

  var getRandomIndex = function(array) {
    return Math.floor(Math.random() * array.length);
  };

  this.image = './img/corgi.jpg';
  this.$node = $('<span class="dancer">' + this.imageList[getRandomIndex(this.imageList)] + '</span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);

};

makeDancer.prototype.step = function() {

  setTimeout(this.step.bind(this), this.timeBetweenSteps);

};

makeDancer.prototype.setPosition = function(top, left) {

  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);

};


