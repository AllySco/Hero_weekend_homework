var Quest = function( questName, difficulty, urgency, reward, complete ) {
  this.questName = questName;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.complete = complete;
}

// Quest.prototype = {
//   talk: function() {
    
//  }
// }


module.exports = Quest;