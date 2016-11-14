import { Meteor } from 'meteor/meteor';

import { Cameras } from '../cameras.js';

Meteor.publish('userCameras', function(thisUsersEmail) {
  return Camera.find({ userID: thisUsersEmail });
})
