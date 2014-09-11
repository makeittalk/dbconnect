Schema = {};

Schema.Fields = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  type: {
    type: String,
    label: "type"
  },
  label: {
    type: String,
    label: "label"
  }
});

Schema.SchemaDefinition = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  fields: {
    type: [String],
    label: "Fields"
  },
  createdAt: {
    type: Date,
    label: "Created at"
  }
});
