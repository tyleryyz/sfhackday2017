import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../../ui/pages/home.js';
import '../../ui/pages/live_streams.js';
import '../../ui/layouts/default.js';
import '../../ui/pages/saved_streams';
 const authroutes = FlowRouter.group({
   name: 'authenticated',
 })

 authroutes.route('/', {
   name: 'home',
   action(){
     BlazeLayout.render('default', {yield: 'home'})
   }
 })

 authroutes.route('/live_streams', {
   name: 'live_streams',
   action(){
     BlazeLayout.render('default', {yield: 'live_streams'})
   }
 })

 authroutes.route('/saved_streams', {
   name: 'saved_streams',
   action(){
     BlazeLayout.render('default', {yield: 'saved_streams'})
   }
 })
