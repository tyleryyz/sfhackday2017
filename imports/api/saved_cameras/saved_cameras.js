import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

SimpleSchema.debug = true

export const Saved_camera = new Mongo.Collection('saved_camera')

Saved_camera.allow({
  insert: () => true,
  update: () => true,
  remove: () => true,
})

Saved_camera.schema = new SimpleSchema({
  url: {
    type: String,
    optional: false,
  },
  title: {
    type: String,
    optional: false,
  },
  timestamp: {
    type: Date,
    optional: false,
  },
  categories: {
    type: String,
    optional: true,
  },
  video: {
    type: Boolean,
    optional: false,
    defaultValue: false,
  },
  image: {
    type: Boolean,
    optional: false,
    defaultValue: false,
  },
  favorite: {
    type: Boolean,
    optional: false,
    defaultValue: false,
  },
  userID: {
    type: String,
    optional: false,
    autoValue: function() {
      return this.userId
    }
  }
})

Saved_camera.attachSchema(Saved_camera.schema)
