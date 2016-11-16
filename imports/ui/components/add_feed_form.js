import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { AutoForm } from 'meteor/aldeed:autoform';
import { Notifications } from 'meteor/gfk:notifications';

import { Camera } from '../../api/cameras/cameras.js';

import './add_feed_form.html';

Template.add_feed_form.onCreated(() =>{
  Meteor.subscribe("myCameras", Meteor.userId());
})
Template.add_feed_form.helpers({
  cameraHelper() {
    return Camera
  },
  categoryHelper() {
    return [
      { label: "Home", value: "Home" },
      { label: "Weather", value: "Weather"},
      { label: "Misc", value: "Misc"}
    ]
  }
})

Template.add_feed_form.events({
  'click .submitButton'(event){
    Notifications.info('Feed added!', 'New feed added to your collection!');
    //console.log("you did the thing!");
  }
})
