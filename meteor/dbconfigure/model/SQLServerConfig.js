Servers = new Meteor.Collection("servers");
Servers.attachSchema(new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  Description: {
    type: String,
    label: "Description"
  },
  server: {
    type: String,
    label: "Server URL"
  },
  userName: {
    type: String,
    label: "Usr name"
  },
  port: {
    type: String,
    label: "Port"
  },
  instanceName: {
    type: String,
    label: "Instance name" 
  },
  password: {
    type: String,
    label: "Password"
  }
}));
