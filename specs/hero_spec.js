var assert = require( "assert" );
var Hero = require( "../hero.js" );

describe("hero", function() {

  var hero;

  beforeEach( function() {
    hero = new Hero( "Scary Terry", 400, "Yogurt" );
  })

  it("should have a name", function() {
    assert.strictEqual( "Scary Terry", hero.name );
  })

  it("should have health points", function() {
    assert.strictEqual( 400, hero.health );
  })

  it("should have a fav food", function() {
    assert.strictEqual( "Yogurt", hero.favFood );
  })

  it("should be able to talk", function() {
    assert.strictEqual( "I'm Scary Terry, bitch", hero.talk() );
  })

});