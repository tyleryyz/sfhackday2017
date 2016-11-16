import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Camera } from "../../api/cameras/cameras.js"
import "./live_cards.html";
import { jquery } from 'meteor/jquery'

Template.live_cards.onCreated(() => {
  Meteor.subscribe('myCameras', Meteor.userId());
})

Template.live_cards.helpers({
  cameraHelper() {
    console.log("cameraHelper Here!");
    return Camera;
  },
  Cameras_retrieval() {
    let category_sess = Session.get("category");
    let favorites_sess = Session.get("favorites");
    let user = Meteor.userId()
    console.log("here!");
    console.log(category_sess);
    console.log(favorites_sess);
    console.log(String(user));
    if (Session.get("favorites")==true){
      console.log(Camera.find({userID:user, categories:category_sess, favorite:favorites_sess}).fetch());
      return Camera.find({userID:user, categories:category_sess, favorite:favorites_sess})
    }
    else {
        console.log(Camera.find({userID:user, categories:category_sess}).fetch());
        return Camera.find({userID:user, categories:category_sess});
    }
    console.log(Camera.find({userID:user, categories:category_sess, favorite:favorites_sess}).fetch())
    //return Camera.find({userID:String(user), categories:category_sess,favorite:favorites_sess});
  }
})
