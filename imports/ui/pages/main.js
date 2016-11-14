import './main.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.home.onCreated(() => {
  return Meteor.user() ? FlowRouter.go('/') : false
})
