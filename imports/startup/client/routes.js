import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../../ui/pages/home.js';
import '../../ui/pages/main.js';
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

 authroutes.route('/main', {
   name: 'main',
   action(){
     BlazeLayout.render('default', {yield: 'main'})
   }
 })
