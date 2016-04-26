var makeOrangeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.imageList = [];
  this.imageList.push('<img class=\"food\" src=\"http://www.pngall.com/wp-content/uploads/2016/02/Acorn-PNG.png\">'); 
  this.imageList.push('<img class=\"food\" src=\"http://www.tuxpaint.org/stamps/stamps/food/fruit/cartoon/banana.svg\">'); 
  this.imageList.push('<img class=\"food\" src=\"http://40.media.tumblr.com/c3eb422708f7d7691f985f8541945197/tumblr_mnczrreGAP1s5jjtzo1_500.png\">'); //?
  this.imageList.push('<img class=\"food\" src=\"http://icons.iconarchive.com/icons/aha-soft/food/256/hamburger-icon.png\">'); 

  var getRandomIndex = function(arr) {
    return Math.floor(Math.random() * arr.length);
  };

  this.$node = $('<span class="orangeDancer">' + this.imageList[getRandomIndex(this.imageList)] + '</span>');
  this.setPosition();
};

makeOrangeDancer.prototype = Object.create(makeDancer.prototype);
makeOrangeDancer.prototype.constructor = makeOrangeDancer;

makeOrangeDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
};

