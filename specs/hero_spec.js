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









});