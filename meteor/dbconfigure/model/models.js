Servers = new Meteor.Collection("servers");
//Servers.attachSchema(Schema.Server);

Tasks = new Meteor.Collection("tasks");
//Tasks.attachSchema(Schema.Task);

Fields = new Mongo.Collection("fields");
Fields.attachSchema(Schema.Fields);

SchemaDefinition = new Mongo.Collection("schemas");
SchemaDefinition.attachSchema(Schema.SchemaDefinition);

var f = Fields.find();

var oneField={};
f.forEach(function(field){
  oneField[field.name]={};
  oneField[field.name]["type"]=field.type;
  oneField[field.name]["label"]=field.label;
});

Tasks.attachSchema(oneField);
Servers.attachSchema(oneField);

