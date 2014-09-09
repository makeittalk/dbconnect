Houston.add_collection(Meteor.users);
Houston.add_collection(Tasks);
Houston.add_collection(Servers);
Houston.add_collection(Houston._admins);

if (Meteor.isClient) {
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
