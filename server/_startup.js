/* Run fixtures if db is empty. _ file runs first (assuming there aren't any others)
Meteor.startup(function () {
  if (Tasks.find().count() === 0) {
    var task = ["Wash the dishes", "Clean the pool", "Go to the gym"];
    task.forEach(function (text) {
      Tasks.insert({
        text: text,
        createdAt: new Date(),
        owner: Meteor.userId(),
        username: Meteor.user().username
      });
    });
  }
});
*/