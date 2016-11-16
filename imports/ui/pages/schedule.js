import './schedule.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Saved_camera } from '../../api/saved_cameras/saved_cameras.js'

Template.schedule.onCreated(() =>{
  Meteor.subscribe("mySavedCameras", Meteor.userId());
})
Template.schedule.helpers({
  cameraHelper() {
    return Saved_camera
  },
  categoryHelper() {
    return [
      { label: "Home", value: "Home" },
      { label: "Weather", value: "Weather"},
      { label: "Misc", value: "Misc"}
    ]
  }
})
