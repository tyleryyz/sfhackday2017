import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../../ui/pages/home.js';
import '../../ui/pages/live_streams.js';
import '../../ui/layouts/default.js';
import '../../ui/pages/saved_streams';
import '../../ui/pages/add_feed_page.js';
import '../../ui/pages/saved_images.js';
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

 authroutes.route('/add_feed_page', {
   name: 'add_feed_page',
   action(){
     BlazeLayout.render('default', {yield: 'add_feed_page'})
   }
 })

 authroutes.route('/saved_images', {
   name: 'saved_images',
   action(){
     BlazeLayout.render('default', {yield: 'saved_images'})
   }
 })
