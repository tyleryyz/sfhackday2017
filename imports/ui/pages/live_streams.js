import './live_streams.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.live_streams.onCreated(() => {
  return Meteor.user() ? FlowRouter.go('/live_streams') : FlowRouter.go('/');
})
