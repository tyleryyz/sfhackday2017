import { Meteor } from 'meteor/meteor';

import { Cameras } from '../cameras/cameras.js';

Meteor.publish('myHouse', function(thisUsersEmail) {
  return House.find({ members: thisUsersEmail });
})
