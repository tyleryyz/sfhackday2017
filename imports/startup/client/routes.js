import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../../ui/pages/home.js';
import '../../ui/pages/main_page.js';
import '../../ui/layouts/default.js';

 const authroutes = FlowRouter.group({
   name: 'authenticated',
 })

 authroutes.route('/', {
   name: 'home',
   action(){
     BlazeLayout.render('default', {yield: 'home'})
   }
 })

 authroutes.route('/main_page', {
   name: 'main_page',
   action(){
     BlazeLayout.render('default', {yield: 'main_page'})
   }
 })
