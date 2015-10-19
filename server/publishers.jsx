// Publish your collections here, subscribe to them on the client
Meteor.publish("tasks", function () {
  // Only publish tasks that are public or belong to the current user
  return Tasks.find({
    $or: [
      { private: {$ne: true} },
      { owner: this.userId }
    ]
  });
});