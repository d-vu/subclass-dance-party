var makeOrangeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="orangeDancer"></span>');
  this.setPosition();
};

makeOrangeDancer.prototype = Object.create(makeDancer.prototype);
makeOrangeDancer.prototype.constructor = makeOrangeDancer;

makeOrangeDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();
};

