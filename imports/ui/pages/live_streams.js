import './live_streams.html';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import "../components/live_buttons.js";
import "../components/add_feed_button.js";
import "../components/live_feeds_nav.js";
import "../components/live_cards.js";
import "../../api/cameras/cameras.js";

Template.live_streams.onCreated(() => {
  Session.set("home", false);
  Session.set("weather", false);
  Session.set("favorites", false);
  Session.set("misc", false);
})
