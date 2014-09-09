Schema = {};

Schema.Task = new SimpleSchema({
  name: {
    type: String,
    label: "Task Name"
  },
  description: {
    type: String,
    label: "Description"
  },
  type: {
    type: String,
    label: "Task Type"
  },
  targetObjectId: {
    type: String,
    label: "Object Id"
  }
});

Schema.Server =new SimpleSchema({
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
});

