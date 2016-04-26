var makeBlueDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.imageList = [];
  this.imageList.push('<img class=\"gifs\" src=\"http://i.giphy.com/F5njAlGB0wpy.gif\">'); //obama
  this.imageList.push('<img height=\"150px\" class=\"gifs\" src=\"http://i.giphy.com/8u9uA7K7iFwmQ.gif\">'); //MJ
  // this.imageList.push('<img class=\"gifs\" src=\"http://i.giphy.com/JCO6GDyORGGQ0.gif\">');
  this.imageList.push('<img height=\"150px\" class=\"gifs\" src=\"http://i.giphy.com/aHFDo5Gb65rYQ.gif\">'); //?
  this.imageList.push('<img height=\"150px\" class=\"gifs\" src=\"http://i.giphy.com/yZ3EUPGxRL5C0.gif\">'); //bean?

  var getRandomIndex = function(arr) {
    return Math.floor(Math.random() * arr.length);
  };

  this.$node = $('<span class="blueDancer">' + this.imageList[getRandomIndex(this.imageList)] + '</span>');
  this.setPosition();
};

makeBlueDancer.prototype = Object.create(makeDancer.prototype);
makeBlueDancer.prototype.constructor = makeBlueDancer;

makeBlueDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
};

