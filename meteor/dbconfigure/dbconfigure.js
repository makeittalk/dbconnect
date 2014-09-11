Houston.add_collection(Meteor.users);
Houston.add_collection(Tasks);
Houston.add_collection(Servers);
Houston.add_collection(Houston._admins);
Houston.add_collection(Fields);
Houston.add_collection(SchemaDefinition);

if (Meteor.isClient) {
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    console.log("Starting...");
    console.log(Schema.SchemaDefinition);
  });
}
