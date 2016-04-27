var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.image = '<img src=\"http://i.giphy.com/xjOXJ5HGLQkP6.gif\" class=\"bmo\" height=\"100px\">';
  this.$node = $('<span class="bmoDancer">' + this.image + '</span>');
  this.setPosition();
  this.setPosition = $(this.$node).position();
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({
    left: '+=30px'
  });
  this.left += 30;
};

