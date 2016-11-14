import './main_page.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.main_page.onCreated(() => {
  return Meteor.user() ? FlowRouter.go('/main_page') : FlowRouter.go('/');
})
