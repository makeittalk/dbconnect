Servers = new Meteor.Collection("servers");
//Servers.attachSchema(Schema.Server);

Tasks = new Meteor.Collection("tasks");
//Tasks.attachSchema(Schema.Task);

Fields = new Mongo.Collection("fields");
Fields.attachSchema(Schema.Fields);

SchemaDefinition = new Mongo.Collection("schemas");
SchemaDefinition.attachSchema(Schema.SchemaDefinition);
