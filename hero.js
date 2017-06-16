var Hero = function( name, health, favFood ) {
  this.name = name;
  this.health = health;
  this.favFood = favFood;
  this.quests = [];
}

Hero.prototype = {
  talk: function() {
    return "I'm " + this.name + ", bitch"
  }
}

module.exports = Hero;