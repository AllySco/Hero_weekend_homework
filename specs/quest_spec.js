var assert = require( "assert" );
var Quest = require( "../quest.js" );

describe("quest", function() {

  var quest1;

  beforeEach( function() {
    quest1 = new Quest( "Save the cat", "Easy", "Low", 100, false );
  })

  it("should have a quest name", function() {
    assert.strictEqual( "Save the cat", quest1.questName );
  })

  it("should have a difficulty", function() {
    assert.strictEqual( "Easy", quest1.difficulty );
  })

  it("should have an urgency", function() {
    assert.strictEqual( "Low", quest1.urgency );
  })


});