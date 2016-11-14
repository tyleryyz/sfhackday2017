import './home.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.home.onRendered(() => {
  return Meteor.user() ? FlowRouter.go('/main_page') : FlowRouter.go('/');
})
